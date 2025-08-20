import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
     typeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    name: {
      type: String
    },
    descriptiion: {
      type: String
    },
    price: Number,
    mrp: Number,
    type: [],
    stock : {
      type: Number,
    },
    status: {
      enum: [active , outOfStock, discontinued]
    }
  },
  { timeseries: true }
);

const Products = mongoose.model("Products", productsSchema);
export default Products;
