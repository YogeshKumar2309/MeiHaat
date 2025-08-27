import bcrypt from "bcrypt";
import User from "../../models/User.model.js";
import { sendError, sendSuccess } from "../../utils/helpers/response.js";
import { sendWelcomeEmail } from "../../services/notification/emailService.js";

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
export const userLogout = async (req,res) => {
  if(req.session.user) {
    req.session.destroy( error => {
      if(error) {
        console.log("error destroyin session:", error);
        return sendError(res,"Logout failed",500,error)        
      }
      //Cookie clear
      res.clearCookie("connect.sid"); //default cookie name
      return sendSuccess(res,"Logout successful",)
    })
  } else {
    return sendError(res,"No user is logged in",400,error)
  }
};
