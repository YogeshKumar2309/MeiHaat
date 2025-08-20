import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    rating: String,
    comment: String,    
  },
  { timeseries: true }
);

const Reviews = mongoose.model("Reviews", reviewsSchema);
export default Reviews;
