import React, { useState } from "react";
import { API_URL } from "../constants/constants";
import { toast } from "react-hot-toast";

const useCoursesApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createCourseApi = async (payload, reset) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/create-course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong!";
        throw new Error(errorMessage);
      }

      toast.success("Course created successfully");
      reset();
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return { createCourseApi, isLoading };
};

export default useCoursesApi;
