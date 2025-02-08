import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageURL: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const FoodMenu = mongoose.model("food", foodSchema);

export default FoodMenu;
