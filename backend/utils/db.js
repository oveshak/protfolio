import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.mongo_url); // পুরাতন অপশন বাদ
        console.log("MongoDB Connected!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
};

export default connectdb;
