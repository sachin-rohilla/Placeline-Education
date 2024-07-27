import express from "express";
import protectedRoute from "../middleware/protectedRoutes.js";
import { createCourse } from "../controllers/course_controller.js";

const router = express.Router();

router.post("/create-course", protectedRoute, createCourse);

export default router;
