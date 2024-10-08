import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Components/Loader";
import "./App.css";
import ProtectedRoutes from "./Components/ProtectedRoutes";

const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Home = lazy(() => import("./pages/Home"));
const Layout = lazy(() => import("./Layout/Layout"));
const Courses = lazy(() => import("./pages/Courses"));
const AddCourse = lazy(() => import("./pages/AddCourse"));
const EditCourse = lazy(() => import("./pages/EditCourse"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            {/* <Route path="add-course" element={<AddCourse />} /> */}
            {/* <Route path="edit-course" element={<EditCourse />} /> */}
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          {/* <Route
            path="/login"
            element={
              <ProtectedRoutes>
                <Login />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoutes>
                <SignUp />
              </ProtectedRoutes>
            }
          /> */}
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
