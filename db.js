import mongoose from "mongoose";

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(process.env.MONGO_URI, connectionParams);

        mongoose.connection.on('connected', () => {
            console.log("Connected to database successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("Database connection error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("Disconnected from database");
        });

    } catch (error) {
        console.error("Initial database connection error:", error);
        console.error("Could not connect database!");
    }
};
