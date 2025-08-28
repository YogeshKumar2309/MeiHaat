import bcrypt from "bcrypt";
import User from "../../models/User.model.js";
import { sendError, sendSuccess } from "../../utils/helpers/response.js";
import {
  sendOtpEmail,
  sendWelcomeEmail,
} from "../../services/notification/emailService.js";
import OTP from "../../models/Otp.model.js";
import UserDetail from "../../models/UserDetail.model.js";
import cloudinary from "../../config/cloudinary.js";


export const userResistration = async (req, res) => {
  try {
    const { email, password, roles } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendError(res, " User already exists", 400);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    //role array
    let roleToSave = [];

    if (roles === "shopKeeper" || roles === "delivery") {
      roleToSave.push("customer");
      roleToSave.push(roles);
    } else {
      roleToSave.push(roles || "customer");
    }

    const newUser = new User({
      email,
      password: hashedPassword,
      roles: roleToSave,
      isActive: true,
    });
    await newUser.save();

    //send email
    await sendWelcomeEmail(newUser);

    //session create
    req.session.user = {
      id: newUser._id,
      email: newUser.email,
      roles: newUser.roles,
    };

    return sendSuccess(
      res,
      "registered successfully",
      {
        id: newUser._id,
        email: newUser.email,
        roles: newUser.roles,
        session: req.session,
      },
      201
    );
  } catch (error) {
    console.error("Error in register API:", error);
    return sendError(res, "Server Error", 500, { error: error.message });
  }
};

//login
export const userLogin = async (req, res) => {
  try {
    const { email, password, roles } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return sendError(res, "Invalid Credential", 404);
    }

    const hashedPassword = user.password;
    const checkPass = await bcrypt.compare(password, hashedPassword);

    if (!checkPass) {
      return sendError(res, "Invalid Credential", 404);
    }

    if (!user.isActive) {
      user.isActive = true;
      await user.save();
    }

    req.session.user = {
      id: user._id,
      email: user.email,
      roles: user.roles,
    };

    return sendSuccess(
      res,
      "registered successfully",
      {
        id: user._id,
        email: user.email,
        roles: user.roles,
        session: req.session,
      },
      200
    );
  } catch (error) {
    console.error("Error in login API");
    return sendError(res, "Server Error", 500, { error: error.message });
  }
};

//logout
export const userLogout = async (req, res) => {
  if (req.session.user) {
    req.session.destroy((error) => {
      if (error) {
        console.log("error destroyin session:", error);
        return sendError(res, "Logout failed", 500, error);
      }
      //Cookie clear
      res.clearCookie("connect.sid"); //default cookie name
      return sendSuccess(res, "Logout successful");
    });
  } else {
    return sendError(res, "No user is logged in", 400, error);
  }
};

//email otp send
export const sendEmailOtp = async (req, res) => {
  try {
    const user = req.user;
    const checkUser = await User.findById(user.id);
    if (!checkUser) {
      return sendError(req, "User not found", 404);
    }

    //otp zentrate
    const otp = Math.floor(1000 + Math.random() * 9000);

    await OTP.create({
      userId: checkUser._id,
      otp,
      purpose: "emailVerification",
    });

    //send email
    await sendOtpEmail(checkUser.email, otp);

    return sendSuccess(res, "succussfully send email");
  } catch (error) {
    console.error("error form sendEmailOtp", error);
    return sendError(res, "Internal server error", 500, error);
  }
};

//email otp verify
export const verifyEmailOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = req.user; //comes to session

    const checkOtp = await OTP.findOne({
      userId: user.id,
      otp,
      purpose: "emailVerification",
    });

    if (!checkOtp) {
      return sendError(res, "Invalid or expired OTP");
    }

    await User.findByIdAndUpdate(user.id, {
      emailVerified: true,
    });

    //delete otp
    await OTP.deleteMany({ userId: user.id, purpose: "emailVerification" });

    return sendSuccess(res, "Verify Email successfully");
  } catch (error) {
    console.error("error form verifyEmailOtp", error);
    return sendError(res, "Internal server error", 500, error);
  }
};

//get UserDetail
export const getUserDetail = async (req, res) => {
  try {
    //req.user.id
    const user = req.user;
    //find user in db
    const isUser = await User.findById(user.id).select("-password");
    if (!isUser) {
      return sendError(res, "user not valid / not found", 404);
    }
    //data aggregate
    const data = await User.aggregate([
      { $match: { _id: isUser._id } },
      {
        $lookup: {
          from: "userdetails",
          localField: "_id",
          foreignField: "userId",
          as: "details",
        },
      },
      { $unwind: { path: "$details", preserveNullAndEmptyArrays: true } },
      {
        $project: {
          email: 1,
          roles: 1,
          emailVerified: 1,
          fullName: "$details.fullName",
          Phone: "$details.Phone",
          address: "$details.address",
        },
      },
    ]);

    return sendSuccess(res, "User details", data, 200);
  } catch (error) {
    console.log(error);
  }
};

//add userDetail
export const addUserDetail = async (req, res) => {
  try {
    const { fullName, Phone, address } = req.body;
    const user = req.user;

    const isUser = await User.findById(user.id);
    if (!isUser) {
      return sendError(res, "user not valid / not found", 404);
    }

    const isUserDetail = await UserDetail.findOne({ userId: isUser._id });

    if (isUserDetail) {
      return sendError(res, "Profile already exists, you can update it");
    }
    
    const newUserDetail = new UserDetail({
      userId: isUser._id,
      fullName,
      Phone,
      address,
    });

    await newUserDetail.save();

    return sendSuccess(res, "Profile updated successfully");
  } catch (error) {
    console.log("error from addUserDetail", error);
    return sendError(res, "Internal server error", 500, error);
  }
};

//update userDetail
export const updateUserDetail = async (req, res) => {
  try {
    const { fullName, Phone, address } = req.body;
    const user = req.user;

    const isUser = await User.findById(user.id);
    if (!isUser) {
      return sendError(res, "user not valid / not found", 404);
    }

    const isUserDetail = await UserDetail.findOne({ userId: isUser._id });

    if (!isUserDetail) {
      return sendError(res, "Profile does not exist, please add it first");
    }

    isUserDetail.fullName = fullName || isUserDetail.fullName;
    isUserDetail.Phone = Phone || isUserDetail.Phone;
    isUserDetail.address = address || isUserDetail.address;

    await isUserDetail.save();

    return sendSuccess(res, "Profile updated successfully");
  } catch (error) {
    console.log("error from updateUserDetail", error);
    return sendError(res, "Internal server error", 500, error);
  }
}

//add profile
export const addUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const file = req.file;

    if (!file) {
      return sendError(res, "No file uploaded", 400);
    }
    // Check if user exists
    const isUser = await User.findById(userId);
    if (!isUser) {
      return sendError(res, "User not found", 404);
    }

    //cloudinary upload
    const result = await cloudinary.uploader(file.path, {
      folder: "user_profiles",
    });

    //update user profile
    const user = await User.findByIdAndUpdate(
      userId,
      { profielPic: result.secure_url },
      { new: true }
    ).select("-password");

    if (!user) {
      return sendError(res, "User not found", 404);
    }

    return sendSuccess(res, "Profile picture updated", user);
    
  } catch (error) {
    console.log(error);
    return sendError(res, "Internal server error", 500, error);
  }
}

//updtate profile                                                       
export const updateUserProfile = async (req, res) => {
  try {
    
  } catch (error) {
    console.log(error);
    return sendError(res, "Internal server error", 500, error);
  }
}

//get profile
export const getUserProfile = async (req, res) => {
  try {

  } catch (error) {
    console.log(error);
    return sendError(res, "Internal server error", 500, error);
  }
}
