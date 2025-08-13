import express from "express";
import {
  Register,
  Login,
  GetMe,
  Update,
  Delete,
  Logout,
} from "../controller/authController.js";
import { Protect } from "../middleware/authMiddlewasre.js";

const AuthRouter = express.Router();

AuthRouter.post("/signup", Register);
AuthRouter.post("/login", Login);
AuthRouter.get("/me", Protect, GetMe);
AuthRouter.put("/update", Update);
AuthRouter.post("/delete", Delete);
AuthRouter.get("/logout", Logout);

export default AuthRouter;
