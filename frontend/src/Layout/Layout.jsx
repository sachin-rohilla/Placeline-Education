import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
