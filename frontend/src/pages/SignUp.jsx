import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { signupValidationSchema } from "../utils/FormSchema";
import loginBgImage from "../assets/login.png";
import useAuthApi from "../customHooks/useAuthApi";
import Loader from "../Components/Loader";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isLoading, signUpApi } = useAuthApi();

  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupValidationSchema),
  });

  const onSubmit = async (data) => {
    const { fullName, password, email } = data;
    const payload = {
      fullName,
      password,
      email,
    };

    await signUpApi(payload);
    // reset()
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(
        (prevShowConfirmPassword) => !prevShowConfirmPassword
      );
    }
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="flex-1 hidden lg:flex">
          <img
            src={loginBgImage}
            alt="login-bg-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight">
              Create an Account!
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
                    name="fullName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        id="fullName"
                        autoComplete="fullName"
                        className="input input-bordered  w-full text-sm"
                        disabled={isLoading}
                        placeholder="Enter your full name"
                      />
                    )}
                  />
                  {errors.fullName && (
                    <p className="text-error text-sm mt-2">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
              </div>
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
                        className="input input-bordered  w-full text-sm "
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

              <div className="relative">
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-2 relative w-full">
                      <input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="new-password"
                        className="input input-bordered  w-full pr-10 text-sm"
                        disabled={isLoading}
                        placeholder="Enter your password"
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => togglePasswordVisibility("password")}
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

              <div className="relative">
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <div className="mt-2 relative w-full">
                      <input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        autoComplete="new-password"
                        className="input input-bordered  w-full pr-10 text-sm"
                        placeholder="Confirm your password"
                        disabled={isLoading}
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                      >
                        {!showConfirmPassword ? (
                          <IoMdEyeOff className="text-gray-400 hover:text-gray-600" />
                        ) : (
                          <IoMdEye className="text-gray-400 hover:text-gray-600" />
                        )}
                      </div>
                    </div>
                  )}
                />
                {errors.confirmPassword && (
                  <p className="text-error text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div>
                <button
                  id="signup"
                  title="Sign Up"
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-accent w-full text-white "
                >
                  {!isLoading ? <Loader /> : "Sign Up"}
                </button>
              </div>
            </form>

            <p className="mt-4 text-center text-sm third-main">
              Already have an account?{" "}
              <button
                id="login"
                title="Sign In"
                type="button"
                onClick={() => navigate("/login")}
                className={`font-semibold leading-6 text-accent ${
                  isLoading ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
