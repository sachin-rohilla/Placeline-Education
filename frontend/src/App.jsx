import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";

import Loader from "./Components/Loader";

import "./App.css";

function App() {
  const Login = lazy(() => import("./pages/Login"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Home = lazy(() => import("./pages/Home"));
  return (
    <div className="">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
