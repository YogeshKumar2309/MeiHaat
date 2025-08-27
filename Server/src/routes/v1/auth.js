
import express from "express";
import { validate } from "../../middleware/auth/validator.js";
import { registerSchema } from "../../validators/schemas/authSchema.js";
import { userResistration } from "../../controllers/auth/authController.js";

const authRouter = express.Router();

authRouter.post('/signup',validate(registerSchema),  userResistration);
// authRouter.post('/login',loginValidaton, validate, userLogin);
// authRouter.post('/logout',userLogout);

export default authRouter;

