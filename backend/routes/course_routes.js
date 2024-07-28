import express from "express";
import protectedRoute from "../middleware/protectedRoutes.js";
import {
  createCourse,
  getCourses,
  deleteCourse,
} from "../controllers/course_controller.js";

const router = express.Router();

router.post("/create-course", protectedRoute, createCourse);
router.get("/courses", getCourses);
router.delete("/delete-course/:id", protectedRoute, deleteCourse);
export default router;
