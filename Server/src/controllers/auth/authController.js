import bcrypt from "bcrypt";
import User from "../../models/User.model.js"
import {sendError, sendSuccess} from "../../utils/helpers/response.js"
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

    if(roles === "shopKeeper" || roles === "delivery") {
      roleToSave.push("customer");
      roleToSave.push(roles);
    } else {
      roleToSave.push(roles || "customer");
    }

    const newUser = new User({
      email,
      password: hashedPassword,
      roles: roleToSave,
      isActive: true
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