import mongoose from "mongoose";

const orderItemsSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    quantity: Number,
    Price: {
      type: mongoose.Schema.Types.Decimal128
    },
    discount: {
      type: mongoose.Schema.Types.Decimal128
    }
  
  },
  { timeseries: true }
);

const OrderItems = mongoose.model("OrderItems", orderItemsSchema);
export default OrderItems;
