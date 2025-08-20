import mongoose from "mongoose";

const delivaryDetailSchema = new mongoose.Schema(
  {
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Orders",
      required: true,
    },
    delivaryPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    pickupAdress: String,
    pickupLat: Number,
    pickupLog: Number,
    delivaryAddress: String,
    delivaryLat: Number,
    delivaryLong: Number,
    status: {
      enum: [assigned, pickUp, inTransit, delivared],
      default: "assigned" 
    },
    
  },
  { timeseries: true }
);

const DelivaryDetail = mongoose.model("DelivaryDetail", delivaryDetailSchema);
export default DelivaryDetail;
