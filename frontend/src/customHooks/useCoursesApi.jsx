import React, { useState } from "react";
import { API_URL } from "../constants/constants";
import { toast } from "react-hot-toast";
import { useAppContext } from "../context/AppContext";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useNavigate } from "react-router";

const useCoursesApi = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { setCourses, setEditCourseData } = useAppContext();
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
      navigate("/courses");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  const getCoursesApi = async (limit = 10) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/courses?limit=${limit}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong!";
        throw new Error(errorMessage);
      }
      setCourses(data?.courses);
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const getCourseByIdApi = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/course/?id=${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong!";
        throw new Error(errorMessage);
      }
      setEditCourseData(data?.course);
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteCourseApi = async (courseId) => {
    try {
      setIsLoading(true);
      const confirmed = await confirm();
      if (confirmed) {
        const response = await fetch(
          `${API_URL}/api/delete-course/${courseId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        if (response?.status === 200) {
          Swal.fire({
            title: "Course deleted successfully",
            icon: "success",
            text: "Your course has been deleted successfully",
          });
          getCoursesApi();
        }
      }
    } catch (error) {
      Swal.fire({
        title: " Course not deleted",
        text: error.response?.data?.message || "Something went wrong",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateCourseApi = async (payload, courseId, reset) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}/api/update-course/${courseId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        const errorMessage = data?.message || "Something went wrong!";
        throw new Error(errorMessage);
      }
      reset();
      toast.success("Course updated successfully");
      getCoursesApi();
      navigate("/courses");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  const confirm = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    });

    return result.isConfirmed;
  };

  return {
    createCourseApi,
    getCoursesApi,
    getCourseByIdApi,
    deleteCourseApi,
    updateCourseApi,
    isLoading,
  };
};

export default useCoursesApi;
