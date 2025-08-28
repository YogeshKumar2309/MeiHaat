import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  Phone: {
    type: String,
    required: true,
    unique: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
   address: {
    houseNo: { type: String },
    street: { type: String },
    city: { type: String },
    state: { type: String },
    pinCode: { type: String },
    country: { type: String }
  },
},{timestamps: true});

const UserDetail = mongoose.model('UserDetail', userDetailSchema);
export default UserDetail;