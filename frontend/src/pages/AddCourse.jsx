import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { addCourseValidationSchema } from "../utils/FormSchema";
import UploadImage from "../Components/UploadImage";

const AddCourse = () => {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [image, setImage] = useState("");
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addCourseValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log({ ...data, tags, image });
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleImageUpload = (imageUrl) => {
    setImage(imageUrl);
  };

  const handleImageDelete = () => {
    setImage("");
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
                autoComplete="courseName"
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
                type="text"
                id="description"
                autoComplete="description"
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
                autoComplete="price"
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
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="input input-bordered w-full text-sm"
            placeholder="Enter a tag and press enter"
            onKeyDown={(e) => e.key === "Enter" && handleAddTag(e)}
          />
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tag}
                <button
                  type="button"
                  className="ml-2 text-red-500"
                  onClick={() => handleRemoveTag(tag)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
          {errors.tags && (
            <p className="text-error text-sm mt-2">{errors.tags.message}</p>
          )}
        </div>

        <div className="mt-2">
          <UploadImage
            image={image}
            onUpload={handleImageUpload}
            onDelete={handleImageDelete}
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
