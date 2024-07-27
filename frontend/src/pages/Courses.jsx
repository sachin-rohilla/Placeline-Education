import React from "react";
import { useNavigate } from "react-router";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        id="add-course"
        title="Add Course"
        onClick={() => navigate("/add-course")}
        className="btn bg-accent text-white w-44"
      >
        Add Course
      </button>
    </div>
  );
};

export default Courses;
