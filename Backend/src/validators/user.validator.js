import { body } from "express-validator";

export const registerValidation = [
  body("email")
    .isEmail().withMessage("Valid email required")
    .normalizeEmail(),

  body("password")
    .isLength({min: 6}).withMessage("Password must be at least 6 character long"),

  body("roles")
    .isIn(["shopKeeper", "delivery", "customer"])
    .withMessage("Invalid role")
];

export const loginValidaton = [
  body("email")
    .notEmpty().withMessage("Email is required")
    .isEmail().withMessage("Invalid email format"),

  body("password")
    .notEmpty().withMessage("Password is required")
    .isLength({min: 6}).withMessage("Password must be at least 6 character long")
];