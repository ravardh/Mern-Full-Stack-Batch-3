import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO DB Connected at", conn.connection.host);
  } catch (error) {
    console.log("MONGO DB Connection Error ", error);
    process.exit(1);
  }
};

export default connectDB;
