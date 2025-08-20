import mongoose from "mongoose";

const advertisementsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    title: String,
    description: String,
    vedieo: String,
    image: String,
    status: {
      enum: [panding, ActiveXObject, expires],
    },
    statData: {
      type: Date,
      d,
      efault: Date.now,
    },
    endDate: {
      type: Date,
      default: Date.now,
    },
    clickCont: Number,
    viewCount: Number,
    watchTime: Number,
    like: Number,
       
  },
  { timeseries: true }
);

const Advertisements = mongoose.model("Advertisements", advertisementsSchema);
export default Advertisements;
