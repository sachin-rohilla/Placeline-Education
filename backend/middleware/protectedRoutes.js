import jwt from "jsonwebtoken"; // Importing the jsonwebtoken library
import User from "../models/user_model.js"; // Importing the User model

const protectedRoute = async (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies.token;

    // Check if token is missing
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    // Verify the token using JWT_SECRET from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if token is valid
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    // Find user in the database using the decoded userId from the token and remove the password
    const user = await User.findById(decoded.userId).select("-password");

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - Invalid user" });
    }

    // Attach user object to the request for further use in routes
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle any errors that occur during token verification or user retrieval
    console.error("Error in protectedRoute middleware: ", error?.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default protectedRoute;
