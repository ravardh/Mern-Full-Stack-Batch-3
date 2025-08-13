import express from "express";
import { Register, Login, Logout } from "../controllers/authController.js";
import { sample1, sample2 } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", Register);
router.post("/login", sample1, Login);
router.post("/logout", sample1, sample2, Logout);

export default router;
