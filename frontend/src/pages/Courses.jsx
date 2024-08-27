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
    window.scrollTo(0, 0, { behavior: "smooth" });
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
    <div className="py-12">
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

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                  {/* <div className="badge badge-secondary text-sm">NEW</div> */}
                </h2>
                <p className="mt-2 text-sm line-clamp-6">
                  {course?.description}
                </p>
                <p className="text-accent font-semibold"> ₹ {course?.price}</p>
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
                      <div
                        className="tooltip  tooltip-error"
                        data-tip="Delete "
                      >
                        <MdDelete
                          className="text-xl  cursor-pointer text-error"
                          onClick={() => handleCourseDelete(course?._id)}
                        />
                      </div>
                      <div className="tooltip tooltip-info" data-tip="Edit ">
                        <RiEditCircleFill
                          className="text-xl cursor-pointer text-info"
                          onClick={() =>
                            navigate(`/edit-course/?id=${course?._id}`)
                          }
                        />
                      </div>
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
