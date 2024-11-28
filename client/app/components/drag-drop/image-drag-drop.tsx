import React, { useState, DragEvent } from "react";
import { TbCloudUpload } from "react-icons/tb";

interface ImageDragDropProps {
  handleImages: (image: string) => void;
  max: number;
  current: number;
}

export const ImageDragDrop: React.FC<ImageDragDropProps> = ({ handleImages, current, max }) => {
  const [isHouvered, setIsHouvered] = useState<boolean>(false);
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        const image = reader.result?.toString();
        if (image) {
          handleImages(image);
          setIsHouvered(false);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleInputFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = reader.result?.toString();
        if (image) {
          handleImages(image);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };
  const handleDragStart = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsHouvered(true);
  };
  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsHouvered(false);
  };
  return (
    <label htmlFor="file" className={`relative font-semibold hover-bg-accent-opacity flex flex-col items-center justify-center w-full h-60  border-[1px] border-dashed border-custom-accentColor rounded-md cursor-pointer shadow-lg hover-effect ${isHouvered && "bg-custom-accentColorOpacity shadow-2xl"}`} onDragOver={handleDragOver} onDrop={handleDrop} onDragEnter={handleDragStart} onDragLeave={handleDragLeave}>
      <div className="flex flex-col items-center justify-center gap-2">
        <TbCloudUpload size={70} />
        <p>Drag and Drop</p>
        <p>or</p>
        <span className="border border-custom-accentColor py-1 px-3 rounded-md hover-effect hover-bg-accent">Browse file</span>
        <span className="absolute right-1 bottom-1 text-xs">{`${current}/${max}`}</span>
      </div>
      <input id="file" type="file" className="hidden" onChange={handleInputFile} />
    </label>
  );
};
