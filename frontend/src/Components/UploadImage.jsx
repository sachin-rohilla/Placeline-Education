import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const UploadImage = ({ image, onUpload, onDelete }) => {
  const handleUpload = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dcbxexyjg",
        uploadPreset: "ml_default",
        multiple: false,
        // cropping: true,
        // croppingAspectRatio: 1,
        resourceType: "image",
      },
      (error, result) => {
        if (result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          if (onUpload) onUpload(imageUrl);
        }
      }
    );
  };

  return (
    <div>
      <button
        type="button"
        id="upload"
        title="Upload Image"
        onClick={handleUpload}
        className="btn btn-ghost bg-accent text-white"
      >
        Upload Image
      </button>
      {image && (
        <div className="relative w-fit">
          <img
            src={image}
            alt="Uploaded"
            className="w-60 h-auto mt-4 rounded-lg overflow-hidden object-cover "
          />
          <IoMdCloseCircle
            onClick={onDelete}
            className="absolute top-2 cursor-pointer text-red-500 text-2xl right-2 "
          />
        </div>
      )}
    </div>
  );
};

export default UploadImage;
