import express from 'express';
import { userLogin, userLogout, userResistration } from '../controllers/auth.controller.js';
import { loginValidaton, registerValidation } from '../validators/user.validator.js';
import { validate } from '../middlewares/validation.middleware.js';
const router = express.Router();

router.post('/signup',registerValidation, validate, userResistration);
router.post('/login',loginValidaton, validate, userLogin);
router.post('/logout',userLogout)


export default router;