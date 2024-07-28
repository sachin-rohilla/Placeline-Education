import express from "express";
import protectedRoute from "../middleware/protectedRoutes.js";
import {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
  getCourseById,
} from "../controllers/course_controller.js";

const router = express.Router();

router.post("/create-course", protectedRoute, createCourse);
router.get("/courses", getCourses);
router.get("/course", protectedRoute, getCourseById);
router.delete("/delete-course/:id", protectedRoute, deleteCourse);
router.patch("/update-course/:id", protectedRoute, updateCourse);
export default router;
