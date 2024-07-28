import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdArrowBack, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { loginValidationSchema } from "../utils/FormSchema";
import loginBgImage from "../assets/login.png";
import useAuthApi from "../customHooks/useAuthApi";
import GoogleAuth from "../Components/GoogleAuth";
import Theme from "../Components/Theme";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { isLoading, loginApi, handleGoogleLogin, googleLoading } =
    useAuthApi();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data) => {
    await loginApi(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 hidden lg:flex">
        <img
          src={loginBgImage}
          alt="login-bg-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex  min-h-screen flex-1 flex-col justify-start py-8 overflow-y-auto px-6 lg:px-8">
        <div className="   flex justify-between  items-center  ">
          <div className="tooltip tooltip-bottom   " data-tip="Go back to Home">
            <button
              id="home"
              onClick={() => navigate("/")}
              className="  btn btn-circle"
            >
              <IoMdArrowBack className="text-2xl" />
            </button>
          </div>
          <div>
            <Theme />
          </div>
        </div>
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center cursor-pointer space-x-2  pb-4 "
        >
          <img
            src="/logo.jpeg"
            alt="PlaceLine Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xl font-bold">PlaceLine</span>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight">
            Welcome Back 😊
          </h2> */}
          <div className="mt-4 text-sm font-medium  cursor-pointer">
            <span>Don't have an account?</span>
            <span
              className="text-accent ml-1"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </div>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mt-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id="email"
                      autoComplete="email"
                      className="input input-bordered  w-full text-sm"
                      disabled={isLoading}
                      placeholder="Enter your email"
                    />
                  )}
                />
                {errors.email && (
                  <p className="text-error text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="relative w-full">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <div className="mt-2 relative w-full">
                    <input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      id="password"
                      autoComplete="current-password"
                      className="input input-bordered  w-full text-sm pr-10"
                      disabled={isLoading}
                      placeholder="Enter your password"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "5%",
                        transform: "translateY(-50%)",
                      }}
                      onClick={togglePasswordVisibility}
                      className="cursor-pointer"
                    >
                      {!showPassword ? (
                        <IoMdEyeOff className="text-gray-400 hover:text-gray-600" />
                      ) : (
                        <IoMdEye className="text-gray-400 hover:text-gray-600" />
                      )}
                    </div>
                  </div>
                )}
              />
              {errors.password && (
                <p className="text-error text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <button
                id="login"
                title="Login"
                type="submit"
                disabled={isLoading}
                className="btn btn-accent w-full text-white "
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
            <div className="divider text-sm font-medium">OR</div>
            <GoogleAuth
              isLoading={googleLoading}
              handleClick={handleGoogleLogin}
              text={"Login with Google"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
