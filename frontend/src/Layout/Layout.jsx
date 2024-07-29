import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-20 p-4  lg:px-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
