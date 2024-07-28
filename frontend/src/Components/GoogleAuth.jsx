import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = ({ handleClick, isLoading, text }) => {
  return (
    <div>
      <button
        id="google"
        title="Login with Google"
        type="button"
        onClick={handleClick}
        disabled={isLoading}
        className="btn w-full"
      >
        <FcGoogle className="text-xl" />
        <span className="ml-2">{text || "Google"}</span>
      </button>
    </div>
  );
};

export default GoogleAuth;
