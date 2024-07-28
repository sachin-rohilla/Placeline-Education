import React from "react";

const CourseSkeleton = () => {
  return (
    <div className="flex  flex-col gap-4">
      <div className="skeleton h-56 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
};

export default CourseSkeleton;
