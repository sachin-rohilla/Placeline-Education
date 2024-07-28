import Course from "../models/course_model.js";

export const createCourse = async (req, res) => {
  try {
    const { courseName, description, image, price, tags } = req.body;

    if (!courseName || !description || !image || !price || !tags) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    let course = await Course.findOne({ courseName });
    if (course) {
      return res.status(400).json({ message: "Course already exists" });
    }
    course = new Course({ courseName, description, image, price, tags });
    await course.save();
    return res.status(200).json({ message: "Course created successfully" });
  } catch (error) {
    console.error("Error in createCourse controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    return res
      .status(200)
      .json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    console.error("Error in getCourses controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
