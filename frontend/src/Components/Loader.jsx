import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center main-container z-50">
      <ImSpinner2 className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default Loader;
