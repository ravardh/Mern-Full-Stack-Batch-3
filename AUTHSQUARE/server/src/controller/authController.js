import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import { genAuthToken } from "../utils/auth.js";

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      const error = new Error("All Feilds are Required");
      error.StatusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already Registered.");
      error.StatusCode = 409;
      return next(error);
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashPassword,
    });

    res.status(200).json({ message: "User Signup Sucessfull", data: newUser });
  } catch (erroror) {
    next(erroror);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All Feilds are Required");
      error.StatusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Invalid Email or Password");
      error.StatusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Invalid Email or Password");
      error.StatusCode = 401;
      return next(error);
    }

    const token = genAuthToken(existingUser);

    res
      .status(200)
      .cookie("IDCard", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: "none",
        strict: false,
      })
      .json({ message: "Login Successfully" });
  } catch (error) {
    next(error);
  }
};

export const Update = async (req, res, next) => {
  res.status(200).json({ message: "Update" });
};

export const GetMe = async (req, res, next) => {
  try {
    const currentUser = req.user;
    res.status(200).json({ data: currentUser });
  } catch (error) {
    next(error);
  }
};

export const Delete = async (req, res, next) => {
  res.status(200).json({ message: "Delete" });
};
export const Logout = async (req, res, next) => {
   try {
    res.status(200).clearCookie("IDCard",{maxAge:0}).json({message:"See you soon..."});

  } catch (error) {
    next(error);
  }
};
