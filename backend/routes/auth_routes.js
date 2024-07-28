import express from "express";
import {
  login,
  logOut,
  signUp,
  googleSignIn,
} from "../controllers/auth_controller.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.get("/logout", logOut);
router.post("/google", googleSignIn);

export default router;
