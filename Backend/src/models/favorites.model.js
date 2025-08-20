import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
  },
    {timeseries: true}
)
  
  

const Favorites = mongoose.model("Favorites", favoritesSchema);
export default Favorites;
