import mongoose from "mongoose";
const usersSchema= new mongoose.Schema({
    username: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    remember: { type: Boolean, default: false }
})
const users=mongoose.model('usersdata',usersSchema);
export default users;