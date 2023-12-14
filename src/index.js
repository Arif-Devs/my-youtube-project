import connectDB from "./db/connectionDB.js";
import dotenv from "dotenv";

dotenv.config({ path: "./env" });

connectDB();
