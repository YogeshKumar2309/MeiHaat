import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
  
  },
    {timeseries: true}
)
  
  

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
