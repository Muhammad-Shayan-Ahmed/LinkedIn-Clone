import mongoose, { Connection } from "mongoose";

let isConnected : Connection | boolean = false;

const connectDB = async () => {
    if (isConnected) {
        return isConnected;
    }
    try {
        const res = await mongoose.connect(process.env.MONGODB_URI!);
        isConnected = res.connection;
        return isConnected; 
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default connectDB;