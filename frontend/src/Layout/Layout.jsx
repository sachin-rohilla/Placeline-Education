import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 mx-auto flex justify-center">
        <div className="w-full  max-w-screen-xl px-6 2xl:max-w-screen-2xl">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
