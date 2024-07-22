import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // Token expires in 7 days
  });

  // Set the token as a cookie in the response
  res.cookie("token", token, {
    httpOnly: true, // Cookie is accessible only via HTTP(S) and prevents XSS attacks cross-site scripting
    maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expires in 7 days
    sameSite: "strict", // Cookie will only be sent to same-site requests and CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development", // Cookie will only be sent over HTTPS
  });
};

export default generateTokenAndSetCookie;
