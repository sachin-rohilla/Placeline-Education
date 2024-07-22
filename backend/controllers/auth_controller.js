import bcrypt from "bcryptjs";
import User from "../models/user_model.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

/**
 * Sign up a new user.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the sign up process is complete.
 */
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
