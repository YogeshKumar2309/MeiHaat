import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },

  password: {
    type: String,
    required: true,
  },

  roles: {
    type: [String],
    enum: ["superAdmin", "shopKeeper", "delivery", "customer"],
    default: ["customer"],
    required: true,
  },

  isActive: {
    type: Boolean,
    default: false,
  },

  emailVerified: {
    type: Boolean,
    default: false,
  },

  emailOtp: {
    type: String
  },

  emailOtpExpires: {
    type: Date
  },
  passOtp: {
    type: String
  },

   passOtpExpires: {
    type: Date
  },

},{timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;