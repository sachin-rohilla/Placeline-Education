import express from "express";
import protectedRoute from "../middleware/protectedRoutes.js";
import { createCourse, getCourses } from "../controllers/course_controller.js";

const router = express.Router();

router.post("/create-course", protectedRoute, createCourse);
router.get("/courses", getCourses);
export default router;
