import mongoose from "mongoose";

const shopLocationSchema = new mongoose.Schema({
  shopId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shop",
    required: true,
  },
  latitude: Number,
  langitude: Number,
  adress: String,
  city: String,
  State: String,
  Contry: String,
  postalCode: String,
});

const ShopLocation = mongoose.model("ShopLocation", shopLocationSchema);
export default ShopLocation;
