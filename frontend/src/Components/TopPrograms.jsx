import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useCoursesApi from "../customHooks/useCoursesApi";
import { useAppContext } from "../context/AppContext";
import CourseSkeleton from "../Components/CourseSkeleton";
import { RiEditCircleFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const TopProgram = () => {
  const limit = 3;
  const navigate = useNavigate();
  const { courses, isDark, authUser } = useAppContext();
  const { getCoursesApi, isLoading } = useCoursesApi();

  useEffect(() => {
    getCoursesApi(limit);
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
    <div>
      <h1 className="text-2xl font-medium mb-4 text-center text-secondary mt-20">
        EXPLORE TOP PROGRAMS
      </h1>

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
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/courses")}
          className="btn bg-accent lg:rounded-full mt-8 text-white w-full sm:w-44 "
        >
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default TopProgram;
