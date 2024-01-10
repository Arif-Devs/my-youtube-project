import mongoose from "mongoose";
import pkg from "colors";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_CONNECTION_URL}/${process.env.DB_USERNAME}`
    );
    console.log(
      `Database connected !! DB host: ${connectionInstance.connection.host}`
        .yellow
    );
  } catch (error) {
    console.log("Mongodb connection FAILED".red, error.process.exit(1));
  }
};

export default connectDB;
