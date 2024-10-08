import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { API_URL } from "../constants/constants";
import { useAppContext } from "../context/AppContext";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../utils/Firebase";

const useAuthApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

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

  const handleGoogleLogin = async () => {
    try {
      setGoogleLoading(true);
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const response = await fetch(`${API_URL}/api/auth/google`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: result?.user?.email,
          fullName: result?.user?.displayName,
          profilePic: result?.user?.photoURL,
        }),
        credentials: "include",
      });

      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong";
        throw new Error(errorMessage);
      }
      localStorage.setItem("authUser", JSON.stringify(data?.data));
      toast.success("Welcome back");
      setAuthUser(data?.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const logOutApi = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong";
        throw new Error(errorMessage);
      }
      localStorage.removeItem("authUser");
      toast.success("Logout successfully");
      setAuthUser(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    signUpApi,
    loginApi,
    logOutApi,
    handleGoogleLogin,
    googleLoading,
    isLoading,
  };
};

export default useAuthApi;
