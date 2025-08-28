import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  otp: { type: Number, required: true },
  purpose: {
    type: String,
    enum: ["emailVerification", "resetPassword"],
    required: true,
  },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // 5 minutes TTL(Time To Live)
});

const OTP = mongoose.model("OTP", otpSchema);
export default OTP;
