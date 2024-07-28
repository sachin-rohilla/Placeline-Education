import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
      default: ["Course"],
    },
  },
  {
    timestamps: true,
  }
);
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
