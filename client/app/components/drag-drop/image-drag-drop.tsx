import React, { useState, DragEvent } from "react";
import { TbCloudUpload, TbX } from "react-icons/tb";

export const ImageDragDrop: React.FC<{ handleImages: (image: string, index: number) => void; index: number }> = ({ handleImages, index }) => {
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const image = reader.result?.toString();
        if (image) {
          handleImages(image, index);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex gap-5 mt-4 pt-0.5">
      <label htmlFor="file" className="font-semibold hover-bg-accent-opacity flex flex-col items-center justify-center w-full h-60  border-[1px] border-dashed border-custom-accentColor rounded-md cursor-pointer shadow-lg hover-effect" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="flex flex-col items-center justify-center gap-2">
          <TbCloudUpload size={70} />
          <p>Drag and Drop</p>
          <p>or</p>
          <span className="border border-custom-accentColor py-1 px-3 rounded-md hover-effect hover-bg-accent">Browse file</span>
        </div>
        <input id="file" type="file" className="hidden" />
      </label>
    </div>
  );
};
