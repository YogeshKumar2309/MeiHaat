
import express from "express";
import { validate } from "../../middleware/auth/validator.js";
import { loginSchema, registerSchema } from "../../validators/schemas/authSchema.js";
import { addUserDetail, addUserProfile, getUserDetail, sendEmailOtp, updateUserDetail, userLogin, userLogout, userResistration, verifyEmailOtp } from "../../controllers/auth/authController.js";
import {verifySession}  from "../../middleware/auth/authenticate.js" ;
import {upload }from "../../middleware/common/upload.js";

const authRouter = express.Router();

authRouter.post('/signup',validate(registerSchema),  userResistration);
authRouter.post('/login', validate(loginSchema), userLogin);
authRouter.post('/logout',userLogout);

// only logged-in users can access
authRouter.use(verifySession);
authRouter.get('/emailVarification/sendOtp',sendEmailOtp);
authRouter.post('/emailVarification/verifyOtp',verifyEmailOtp);

authRouter.post('/addUserDetail',addUserDetail);
authRouter.put('/updateUserDetail',updateUserDetail);
authRouter.get('/userDetail',getUserDetail);


authRouter.post('/addUserProfile', upload.single("profilePic"), addUserProfile);
// authRouter.put('/updateUserDetail',updateUserDetail);
// authRouter.get('/userDetail',getUserDetail);
export default authRouter;

