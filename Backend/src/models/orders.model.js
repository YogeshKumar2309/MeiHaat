import mongoose from "mongoose";

const userOrders = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shopId : {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true
    },
    productTotal: Number,
    delivaryCharge: Number,
    companyMarginProduct: Number,
    companyMarginDelivary: Number,
    companyMarginCustomer: Number,
    totalAmmount: Number,
    status:{
      type: Boolean,
      enum: [pending, confirmed, outForDelivary, delivered, cancelled]
    }
      },
  { timeseries: true }
);

const Orders = mongoose.model("Orders", userOrders);
export default Orders;
