import mongoose from "mongoose";

const addUserProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  profielPic: {
    type: String,
    default: "",
  },

},{timestamps: true});

const UserProfile = mongoose.model('UserProfile', addUserProfileSchema);
export default UserProfile;