import User from "../models/userModel.js";
import OTP from "../models/otpModel.js";
import bcrypt from "bcrypt";

const genDummyImage = (fullName) => {
  const r = Math.floor(Math.random() * 56) + 200; // 200–255
  const g = Math.floor(Math.random() * 56) + 200;
  const b = Math.floor(Math.random() * 56) + 200;

  const randomColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)}`;

  return `https://ui-avatars.com/api/?name=${fullName.charAt(
    0
  )}&background=${randomColor}&color=fff&size=360`;
};

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password, otp } = req.body;

    const fetchOtp = await OTP.findOne({ email });
    if (fetchOtp) {
      const isOtpValid = await bcrypt.compare(otp, fetchOtp.otp);
      if (!isOtpValid) {
        const error = new Error("Invalid OTP");
        error.statusCode = 409;
        return next(error);
      }
      await OTP.deleteOne({ email });
    } else {
      const error = new Error("OTP Expired !!! Try Again.");
      error.statusCode = 404;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const photo = `https://ui-avatars.com/api/?name=${fullName.charAt(
      0
    )}&background=random&color=fff&size=360`;

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      type: "normalUser",
      photo,
    });
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};
export const Login = async (req, res, next) => {};
export const GoogleLogin = async (req, res, next) => {};

export const SendOTPForRegister = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      const error = new Error("Please fill all the fields");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      return next(error);
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    const hashedOtp = await bcrypt.hash(otp.toString(), 10);
    await OTP.create({
      email,
      otp: hashedOtp,
    });

    const subject = "Verify your email";

    const message = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: #333;">ChatApp Pvt. Ltd.</h2>
                    <h1 style="color: #333; margin-bottom: 20px;">Email Verification Code</h1>
                    <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                        <p style="font-size: 16px; color: #666; margin-bottom: 20px;">
                            Your verification code is:
                        </p>
                        <h2 style="font-size: 32px; color: #4CAF50; letter-spacing: 5px; margin: 20px 0;">
                            ${otp}
                        </h2>
                        <p style="font-size: 14px; color: #999; margin-top: 20px;">
                            This code will expire in 10 minutes. Please do not share this code with anyone.
                        </p>
                    </div>
                    <p style="font-size: 14px; color: #666; margin-top: 20px;">
                        If you didn't request this code, please ignore this email.
                    </p>
                </div>
            </div>
        `;

    sendEmail(email, subject, message);
    res.status(200).json({
      message: "OTP sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const SendOTPForLogin = async (req, res, next) => {};
