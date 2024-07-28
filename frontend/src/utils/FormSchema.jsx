import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const signupValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .trim()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required")
    .test("not-only-spaces", "Full Name cannot be empty", (value) => {
      return value.trim() !== "";
    }),

  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    )
    .required("Email is required"),

  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
export const addCourseValidationSchema = yup.object().shape({
  courseName: yup
    .string()
    .trim()
    .min(3, "Course Name must be at least 3 characters")
    .required("Course Name is required"),
  description: yup
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  price: yup
    .number()
    .positive("Price must be a positive number")
    .min(500, "Price must be at least 500")
    .max(10000, "Price must be at most 20000")
    .required("Price is required"),
  tags: yup
    .array()
    .of(yup.string().trim().min(1, "Tag cannot be empty"))
    .min(1, "At least one tag is required")
    .required("Tags are required"),
  image: yup.string().url("Invalid image URL").required("Image is required"),
});
