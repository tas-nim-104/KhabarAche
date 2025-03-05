import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import Joi from "joi";
import dotenv from "dotenv";

dotenv.config();

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    remember: { type: Boolean, default: false }
});

usersSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_PRIVATE_KEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("usersdata", usersSchema);

const validateUser = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().label("Username"),
        phone: Joi.string().required().label("Phone"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().min(3).required().label("Password"), 
        remember: Joi.boolean().required().label("Remember"),
    });
    return schema.validate(data);
};

export default User;
export { validateUser };
