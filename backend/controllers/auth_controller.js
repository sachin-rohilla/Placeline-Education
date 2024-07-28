import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signUp = async (req, res) => {
  try {
    // Extract user data from request body
    const { fullName, email, password } = req.body;

    // Check if all fields are filled
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save user to database
    await user.save();

    // Generate and set JWT token
    generateTokenAndSetCookie(user?._id, res);

    // Return success message
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    // Log and return error message
    console.error("Error in signUp controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    // Extract user data from request body
    const { email, password } = req.body;

    // Check if all fields are filled
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate and set JWT token
    generateTokenAndSetCookie(user?._id, res);

    const { password: _, ...others } = user.toObject();

    // Return success message
    return res.status(200).json({ message: "Login successful", data: others });
  } catch (error) {
    // Log and return error message
    console.error("Error in login controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logOut = async (req, res) => {
  try {
    // Clear the token cookie
    res.cookie("token", "", { maxAge: 0 });

    // Return success message
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    // Log and return error message
    console.error("Error in logout controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const googleSignIn = async (req, res) => {
  try {
    const { email, fullName, profilePic } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      // Use the existing user and generate a token
      generateTokenAndSetCookie(user._id, res);

      const { password, ...userData } = user._doc;
      return res
        .status(200)
        .json({ message: "Login successfully", data: userData });
    } else {
      // Create a new user if one doesn't exist
      const generatePassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(generatePassword, salt);

      const newUser = new User({
        fullName,
        email,
        profilePic: profilePic || "",
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      // Generate and set JWT token
      generateTokenAndSetCookie(savedUser._id, res);

      const { password, ...userData } = savedUser._doc;
      return res
        .status(200)
        .json({
          message: "User created and logged in successfully",
          data: userData,
        });
    }
  } catch (error) {
    console.error("Error in googleSignIn controller:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
