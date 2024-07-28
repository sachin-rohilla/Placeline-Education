import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useCoursesApi from "../customHooks/useCoursesApi";
import { useAppContext } from "../context/AppContext";
import CourseSkeleton from "../Components/CourseSkeleton";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const Courses = () => {
  const navigate = useNavigate();
  const { courses, isDark, authUser } = useAppContext();
  const { getCoursesApi, deleteCourseApi, isLoading } = useCoursesApi();

  const handleCourseDelete = async (courseId) => {
    await deleteCourseApi(courseId);
  };

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
    <div className="">
      {authUser?._id === "66a37293d6c9e1a405de3d37" && (
        <div className="w-full flex justify-end">
          <button
            id="add-course"
            title="Add Course"
            onClick={() => navigate("/add-course")}
            className="btn bg-accent text-white w-full sm:w-44 mb-4"
          >
            Add Course
          </button>
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4 text-center">Premium Courses</h1>

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
              <div className={`card-body p-4 ${isDark ? "bg-neutral" : ""}`}>
                <h2 className="card-title  text-lg font-semibold flex justify-between capitalize items-center">
                  {course?.courseName?.length > 20 ? (
                    <>{course?.courseName?.slice(0, 20)}...</>
                  ) : (
                    <>{course?.courseName}</>
                  )}
                  <div className="badge badge-secondary text-sm">NEW</div>
                </h2>
                <p className="mt-2 text-sm line-clamp-6">
                  {course?.description}
                </p>
                <div className=" mt-4 flex justify-between items-start gap-2">
                  <div className="flex items-center gap-2 flex-wrap ">
                    {course?.tags?.length > 0 &&
                      course?.tags?.map((tag, index) => (
                        <div
                          key={index}
                          className="badge capitalize badge-outline text-sm"
                        >
                          {tag}
                        </div>
                      ))}
                  </div>
                  {authUser?._id === "66a37293d6c9e1a405de3d37" && (
                    <div className="flex items-center gap-2">
                      <RiEditCircleFill className="text-xl cursor-pointer" />
                      <MdDelete
                        className="text-xl cursor-pointer"
                        onClick={() => handleCourseDelete(course?._id)}
                      />
                    </div>
                  )}
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
