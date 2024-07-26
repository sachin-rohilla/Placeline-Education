import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { API_URL } from "../constants/constants";
import { useAppContext } from "../context/AppContext";

const useAuthApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authUser, setAuthUser } = useAppContext();
  const navigate = useNavigate();
  const signUpApi = async (payload) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/auth/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong";
        throw new Error(errorMessage);
      }
      toast.success("User created successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginApi = async (payload) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong";
        throw new Error(errorMessage);
      }
      localStorage.setItem("authUser", JSON.stringify(data?.data));
      toast.success("Welcome back ");
      setAuthUser(data?.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return { signUpApi, loginApi, isLoading };
};

export default useAuthApi;
