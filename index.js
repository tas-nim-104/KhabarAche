import express from "express";
import mongoose from "mongoose"; 
import dotenv from "dotenv";
import cors from "cors";
import Users from "./models/users.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4002;
const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error connecting database ${err}`));

app.use(express.json());
app.use(cors());

// ✅ Login Route (Fixed)
app.post("/loginpage", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username }); // ✅ Use findOne() instead of find()

    if (!user) {
      return res.status(404).json("No record existed");
    }

    if (user.password !== password) {  // ✅ Directly compare passwords
      return res.status(400).json("The password is incorrect");
    }

    res.json("Success");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

// ✅ Register Route (Fixed)
app.post("/registerpage", async (req, res) => {
  try {
    const user = new Users(req.body); // ✅ Create a new user
    await user.save(); // ✅ Save user to the database
    res.json("User registered successfully");
  } catch (err) {
    res.status(500).json("Error registering user");
  }
});

// ✅ Server Listener
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
