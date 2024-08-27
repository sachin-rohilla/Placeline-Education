import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 p-4  lg:px-36">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
