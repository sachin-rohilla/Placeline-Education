import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import useAuthApi from "../customHooks/useAuthApi";
import { useNavigate } from "react-router";
import { navbarLinks } from "../constants/constants";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { authUser, isDark, setIsDark } = useAppContext();
  const { logOutApi } = useAuthApi();

  const handleLogOut = async () => {
    await logOutApi();
  };

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };

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
            >
              <img
                src="/logo.jpeg"
                alt="PlaceLine Logo"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-xl font-bold">PlaceLine</span>
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
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="hidden"
                value={isDark}
                onChange={toggleTheme}
              />

              <svg
                className={"swap-off h-8 w-8 fill-current"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              <svg
                className={"swap-on h-8 w-8 fill-current"}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            {/* Search Input */}
            <div className="form-control hidden lg:block">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
              />
            </div>

            {/* Profile Dropdown */}
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
          >
            <img
              src="/logo.jpeg"
              alt="PlaceLine Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold">PlaceLine</span>
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
