import mongoose from "mongoose";

const discountSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    discountPersent: Number,   

  },
  { timeseries: true }
);

const Discount = mongoose.model("Discount", discountSchema);
export default Discount;
