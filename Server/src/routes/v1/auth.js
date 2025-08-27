
import express from "express";
import { validate } from "../../middleware/auth/validator.js";
import { loginSchema, registerSchema } from "../../validators/schemas/authSchema.js";
import { userLogin, userLogout, userResistration } from "../../controllers/auth/authController.js";

const authRouter = express.Router();

authRouter.post('/signup',validate(registerSchema),  userResistration);
authRouter.post('/login', validate(loginSchema), userLogin);
authRouter.post('/logout',userLogout);

export default authRouter;

