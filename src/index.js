import connectDB from "./db/connectionDB.js";
import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection failed", err);
  });
