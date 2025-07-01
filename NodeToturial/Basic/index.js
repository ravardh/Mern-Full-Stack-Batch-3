import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routes/authRouter.js";


const app = express();

app.use("/auth", AuthRouter);

app.get("/", (request, response) => {
  response.json({ message: "Mai server hoon" });
});

// let port;

// if (process.env.PORT) {
//   port = process.env.PORT;
// } else {
//   port = 5000;
// }
const port = process.env.PORT  || 5000;

app.listen(port, () => {
  console.log("Server Started at", port);
  connectDB();
});
