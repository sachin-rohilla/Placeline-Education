import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import UploadImage from "../Components/UploadImage";

import { addCourseValidationSchema } from "../utils/FormSchema";
import useCoursesApi from "../customHooks/useCoursesApi";

const AddCourse = () => {
  const [tagInput, setTagInput] = useState("");
  const { createCourseApi, isLoading } = useCoursesApi();
  const {
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCourseValidationSchema),
    defaultValues: {
      tags: [],
      image: "",
    },
  });
  const handleResetForm = () => {
    reset({
      tags: [],
      image: "",
      price: "",
      description: "",
      courseName: "",
    });
  };

  const onSubmit = async (data) => {
    createCourseApi(data, handleResetForm);
  };

  const handleAddTag = (e, tagInput, tags) => {
    e.preventDefault();
    if (tagInput) {
      if (tags.includes(tagInput)) {
        setError("tags", { type: "manual", message: "Tag already exists" });
      } else {
        const newTags = [...tags, tagInput];
        setValue("tags", newTags);
        clearErrors("tags");
        setTagInput("");
      }
    } else {
      setError("tags", { type: "manual", message: "Tag cannot be empty" });
    }
  };

  const handleRemoveTag = (tagToRemove, tags) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setValue("tags", updatedTags);
    clearErrors("tags");
  };

  const handleImageUpload = (imageUrl) => {
    if (imageUrl && isValidURL(imageUrl)) {
      setValue("image", imageUrl);
      clearErrors("image");
    } else {
      setError("image", { type: "manual", message: "Invalid image URL" });
    }
  };

  const handleImageDelete = () => {
    setValue("image", "");
    clearErrors("image");
  };

  const isValidURL = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <div>
      <form
        className="space-y-6"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-2">
          <Controller
            name="courseName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="courseName"
                className={`input input-bordered w-full text-sm ${
                  errors.courseName ? "border-red-500" : ""
                }`}
                placeholder="Enter your course name"
              />
            )}
          />
          {errors.courseName && (
            <p className="text-error text-sm mt-2">
              {errors.courseName.message}
            </p>
          )}
        </div>

        <div className="mt-2">
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                rows="5"
                className={`textarea textarea-bordered resize-none w-full text-sm ${
                  errors.description ? "border-red-500" : ""
                }`}
                placeholder="Enter your course description"
              />
            )}
          />
          {errors.description && (
            <p className="text-error text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mt-2">
          <Controller
            name="price"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                min={500}
                max={10000}
                id="price"
                className={`input input-bordered w-full text-sm ${
                  errors.price ? "border-red-500" : ""
                }`}
                placeholder="Enter your course price"
              />
            )}
          />
          {errors.price && (
            <p className="text-error text-sm mt-2">{errors.price.message}</p>
          )}
        </div>

        <div className="mt-2">
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  type="text"
                  id="tagInput"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  className="input input-bordered w-full text-sm"
                  placeholder="Enter a tag and press enter"
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleAddTag(e, tagInput, field.value)
                  }
                />
                <div className="mt-2">
                  {field.value.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                    >
                      {tag}
                      <button
                        type="button"
                        className="ml-2 text-red-500"
                        onClick={() => handleRemoveTag(tag, field.value)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          />
          {errors.tags && (
            <p className="text-error text-sm mt-2">{errors.tags.message}</p>
          )}
        </div>

        <div className="mt-2">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <UploadImage
                image={field.value}
                onUpload={handleImageUpload}
                onDelete={handleImageDelete}
              />
            )}
          />
          {errors.image && (
            <p className="text-error text-sm mt-2">{errors.image.message}</p>
          )}
        </div>

        <div>
          <button
            id="login"
            title="Login"
            type="submit"
            className="btn btn-accent w-full text-white"
          >
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
