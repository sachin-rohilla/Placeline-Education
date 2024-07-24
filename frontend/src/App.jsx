import { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";

function App() {
  const Login = lazy(() => import("./pages/Login"));
  const SignUp = lazy(() => import("./pages/SignUp"));
  const Home = lazy(() => import("./pages/Home"));
  return (
    <div className="">
      {/* <Navbar /> */}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
