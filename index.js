import express from "express";
import mongoose from "mongoose"; 
import dotenv from "dotenv";
import cors from "cors";
import food from "./models/Foodmenu.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4002;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error connecting database ${err}`));

app.use(express.json());
app.use(cors());
app.get("/food/get", async (req, res) => {
  try {
    const MenuItems = await food.find(); 
    res.status(200).json(MenuItems);
  } catch (err) {
    res.status(500).json({ message: "Error fetching food items", error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
