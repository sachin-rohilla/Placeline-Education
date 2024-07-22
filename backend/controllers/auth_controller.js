import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

export const signUp = async (req, res) => {
  try {
    // Extract user data from request body
    const { fullName, email, password } = req.body;

    // Check if all fields are filled
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
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
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    // Extract user data from request body
    const { email, password } = req.body;

    // Check if all fields are filled
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // Check if password is correct
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate and set JWT token
    generateTokenAndSetCookie(user?._id, res);

    // Return success message
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    // Log and return error message
    console.error("Error in login controller", error?.message);
    return res.status(500).json({ error: "Internal server error" });
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
    return res.status(500).json({ error: "Internal server error" });
  }
};
