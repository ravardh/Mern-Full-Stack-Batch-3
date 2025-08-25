import express from "express";
import { Protect } from "../middlewares/authMiddleware.js";
import { GetAllUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/allUsers", Protect, GetAllUser);

export default router;
