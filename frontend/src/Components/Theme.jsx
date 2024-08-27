import React from "react";
import { useAppContext } from "../context/AppContext";
import { GoMoon, GoSun } from "react-icons/go";

const Theme = () => {
  const { isDark, setIsDark } = useAppContext();
  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <div className="tooltip tooltip-bottom flex justify-end  ">
      <button className="btn btn-circle" onClick={toggleTheme}>
        <input type="checkbox" className="hidden" value={isDark} />

        {isDark ? (
          <GoSun className={` text-xl`} title="Light" />
        ) : (
          <GoMoon className={` text-xl`} title="Dark" />
        )}
      </button>
    </div>
  );
};

export default Theme;
