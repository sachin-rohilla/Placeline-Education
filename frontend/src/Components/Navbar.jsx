import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import useAuthApi from "../customHooks/useAuthApi";
import { useNavigate } from "react-router";
import { navbarLinks } from "../constants/constants";
import Theme from "./Theme";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { authUser, isDark, setIsDark } = useAppContext();
  const { logOutApi } = useAuthApi();

  const handleLogOut = async () => {
    await logOutApi();
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="navbar bg-base-100 fixed top-0 left-0 w-full z-10 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-2">
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-square btn-ghost lg:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            {/* Logo and Home Link */}
            <div
              onClick={() => navigate("/")}
              className="flex items-center cursor-pointer space-x-2"
              title="PlaceLine"
            >
              <img
                src="/logo.jpeg"
                alt="PlaceLine Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>
                <span className="text-xl font-bold">PlaceLine</span>
                <p className="text-xs mt-0.5">JOB ORIENTED TRAINING</p>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-4">
            {navbarLinks.map((link) => (
              <button
                key={link?.name}
                onClick={() => navigate(link?.path)}
                className="btn btn-ghost hover:bg-accent hover:text-white"
              >
                {link?.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Theme />
            {/* Profile Dropdown */}
            {/* Uncomment and customize as needed */}
            {/* {authUser ? (
              <div className="dropdown dropdown-end">
                <button
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar"
                  aria-label="User profile"
                >
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      alt="Profile"
                      src={
                        (authUser && authUser?.profilePic) ||
                        "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      }
                      className="object-cover w-full h-full"
                    />
                  </div>
                </button>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
                >
                  <li>
                    <a className="flex items-center justify-between">
                      Profile
                      <span className="badge badge-secondary">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="text-red-500">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                id="login"
                title="Login"
                className="btn btn-accent text-white"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )} */}
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        style={{
          transition: "transform 0.3s ease-in-out",
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div
          className={`relative ${
            isDark ? "bg-neutral" : "bg-white"
          }  w-4/5 h-full z-50 p-2 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            onClick={() => {
              navigate("/");
              setIsMobileMenuOpen(false);
            }}
            className="flex justify-center mt-2 items-center cursor-pointer space-x-2"
            title="PlaceLine"
          >
            <img
              src="/logo.jpeg"
              alt="PlaceLine Logo"
              className="w-10 h-10 rounded-full object-cover"
            />

            <span>
              <span className="text-xl font-bold">PlaceLine</span>
              <p className="text-xs mt-0.5">JOB ORIENTED TRAINING</p>
            </span>
          </div>
          <div className="divider"></div>
          <div className="flex flex-col space-y-4">
            {navbarLinks.map((link) => (
              <button
                key={link?.name}
                onClick={() => {
                  navigate(link?.path);
                  setIsMobileMenuOpen(false);
                }}
                className="btn btn-ghost w-full hover:bg-accent hover:text-white text-left"
              >
                {link?.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
