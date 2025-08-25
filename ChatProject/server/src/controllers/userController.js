import User from "../models/userModel.js";

export const GetAllUser = async (req, res, next) => {
  try {
    const currentUser = req.user._id;
    const users = await User.find({ _id: { $ne: currentUser } }).select(
      "-password"
    );
    res.status(200).json({ message: "All User Fetched", data: users });
  } catch (error) {
    next(error);
  }
};
