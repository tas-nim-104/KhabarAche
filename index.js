import express from "express";
import mongoose from "mongoose"; 
import bodyParser from "body-parser";
import cors from "cors";
import postRoutes from "./routes/post.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4003;
const URI=process.env.MONGO_URI;
mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true}
).then(()=> console.log("Database connected"))
.catch(err =>console.log(`Error connecting database ${err}`));
app.use('/post', postRoutes);
app.use(express.json()); 
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({limit: '30mb', extended: true})); 
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "API is working" });
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
