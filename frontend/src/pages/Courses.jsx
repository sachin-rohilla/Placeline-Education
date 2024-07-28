import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useCoursesApi from "../customHooks/useCoursesApi";
import { useAppContext } from "../context/AppContext";
import CourseSkeleton from "../Components/CourseSkeleton";

const Courses = () => {
  const navigate = useNavigate();
  const { courses } = useAppContext();
  const { getCoursesApi, isLoading } = useCoursesApi();

  useEffect(() => {
    getCoursesApi();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6]?.map((item) => (
          <div key={item} className="px-4">
            <CourseSkeleton />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <button
        id="add-course"
        title="Add Course"
        onClick={() => navigate("/add-course")}
        className="btn bg-accent text-white w-full sm:w-44"
      >
        Add Course
      </button>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          courses?.length > 0 &&
          courses?.map((course) => (
            <div
              className="card bg-base-100 shadow-xl rounded-lg overflow-hidden"
              key={course?._id}
            >
              <figure className="relative">
                <img
                  src={course?.image}
                  alt={course?.courseName}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body p-4">
                <h2 className="card-title text-lg font-semibold flex justify-between items-center">
                  {course?.courseName}
                  <div className="badge badge-secondary text-sm">NEW</div>
                </h2>
                <p className="mt-2 text-sm">{course?.description}</p>
                <div className="card-actions mt-4 flex flex-wrap gap-2">
                  {course?.tags?.length > 0 &&
                    course?.tags?.map((tag, index) => (
                      <div key={index} className="badge badge-outline text-sm">
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
