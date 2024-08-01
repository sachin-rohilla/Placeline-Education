import React from "react";

const AcheivementSection = () => {
  return (
    <div className="mx-auto mt-16 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center gap-4">
        <li>
          <div
            className="text-white p-10 rounded-lg shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #a8e063, #56ab2f)", // Green gradient
            }}
          >
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="mt-2 text-lg">Student Enrolled</p>
          </div>
        </li>

        <li>
          <div
            className="text-white p-10 rounded-lg shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #ff6b6b, #f06595)", // Pink gradient
            }}
          >
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="mt-2 text-lg">Batch Completed</p>
          </div>
        </li>

        <li>
          <div
            className="text-white p-10 rounded-lg shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #6a11cb, #2575fc)", // Blue gradient
            }}
          >
            <h3 className="text-2xl font-bold">100%</h3>
            <p className="mt-2 text-lg">Satisfaction Rate</p>
          </div>
        </li>

        <li>
          <div
            className="text-white p-10 rounded-lg shadow-lg"
            style={{
              backgroundImage: "linear-gradient(to right, #f9d423, #ff4e50)", // Yellow to red gradient
            }}
          >
            <h3 className="text-2xl font-bold">10+</h3>
            <p className="mt-2 text-lg">Top Instructors</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AcheivementSection;
