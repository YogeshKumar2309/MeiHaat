import mongoose from "mongoose";

const shopSchema = new mongoose.Schema(
  {
    owenerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    typeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShopType",
      required: true,
      unique: true
    },
    shopName : {
      type: String
    },
    description:{
      type: String,
    },
    logo: {
      type: String,
    },
    licenseNumber: {
      type: String,
      unique: true,
      required :true
    },
  

    serviceRadius : {
      type: Number,
      default: 50,
    },

    isApproved: {
      type : Boolean,
      default: false
    }
  },
  { timeseries: true }
);

const Shop = mongoose.model("Shop", shopSchema);
export default Shop;
