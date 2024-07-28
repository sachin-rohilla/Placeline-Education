import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center">404 - Page Not Found</h1>
        <p className="text-lg mt-2 ">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          id="go-to-home-page
          "
          title="Go to home page"
          className="text-center flex items-center mx-auto mt-4 text-accent text-sm"
        >
          <FaHome className="inline text-lg" />
          <span className="ml-2">Go to home page</span>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
