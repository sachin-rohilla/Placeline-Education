import React from "react";
import { useAppContext } from "../context/AppContext";
import useAuthApi from "../customHooks/useAuthApi";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser } = useAppContext();
  const { isLoading, logOutApi } = useAuthApi();
  const handleLogOut = () => {
    logOutApi();
  };
  return (
    <div className="navbar bg-base-100 absolute top-0 w-full z-10 shadow-lg">
      <div className="flex-1">
        <button onClick={() => navigate("/")} className="btn btn-ghost text-xl">
          daisyUI
        </button>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  (authUser && authUser?.profilePic) ||
                  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button id="logout" title="Logout" onClick={handleLogOut}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
