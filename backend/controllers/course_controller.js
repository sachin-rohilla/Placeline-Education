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
    const limit = parseInt(req.query.limit) || 10;
    const courses = await Course.find().limit(limit);
    return res
      .status(200)
      .json({ message: "Courses fetched successfully", courses });
  } catch (error) {
    console.error("Error in getCourses controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res
      .status(200)
      .json({ message: "Course deleted successfully", course });
  } catch (error) {
    console.error("Error in deteleCourse controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const { id } = req.query;
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res
      .status(200)
      .json({ message: "Course fetched successfully", course });
  } catch (error) {
    console.error("Error in getCourseById controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { courseName, description, image, price, tags } = req.body;
    const course = await Course.findByIdAndUpdate(
      id,
      { courseName, description, image, price, tags },
      { new: true }
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    return res
      .status(200)
      .json({ message: "Course updated successfully", course });
  } catch (error) {
    console.error("Error in updateCourse controller", error?.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
