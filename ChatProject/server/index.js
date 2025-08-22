import { config } from "dotenv";
config();

import express from "express";
import connectDB from "./src/config/db.js";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./src/routes/authRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.get("/api", (req, res) => {
  res.status(200).json({
    message: "ChatApp Backend is running",
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    message,
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
