import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { loginValidationSchema } from "../utils/FormSchema";
import loginBgImage from "../assets/login.png";
const Login = () => {
  const isLoading = false;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = async (data) => {
    // reset();
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex w-full h-screen">
      <div className="flex-1 hidden lg:flex">
        <img
          src={loginBgImage}
          alt="login-bg-image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <p className="absolute top-4 right-4 text-right text-xs xl:text-sm third-main">
          Not a member?{" "}
          <button
            id="sign-up"
            title="Create an account"
            onClick={() => navigate("/signup")}
            className={`font-semibold leading-6 text-accent ${
              isLoading ? "cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            Register Now
          </button>
        </p>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight">
            Welcome Back 😊
          </h2>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
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
                {isLoading ? <MiniLoader /> : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
