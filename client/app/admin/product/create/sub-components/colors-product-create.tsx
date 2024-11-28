import { Admin } from "@/app/@types/admin";
import { Settings } from "@/app/api/settings/settings.api";
import { ImageDragDrop } from "@/app/components/drag-drop/image-drag-drop";
import { InputSelect } from "@/app/components/ui/inputs/input-select";
import { useApp } from "@/app/contexts/app.context";
import { ColorProductCreateI, SchemaColorsProductCreateI } from "@/app/entities/schemas.entitie";
import { formatOptions, handleSingleSelect } from "@/app/utils/masks.util";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TbX } from "react-icons/tb";

export function ColorsProductCreate({ colors, handleColors, removeColor, nextTabIndex }: Admin.ColorsProductCreateProps) {
  const { data } = useQuery({
    queryKey: ["colors"],
    queryFn: Settings.getColors,
  });

  const [images, setImages] = useState<string[]>([]);

  const { ShowToast } = useApp();

  const { handleSubmit, setValue, getValues, reset } = useForm<ColorProductCreateI>({ resolver: yupResolver(SchemaColorsProductCreateI) });

  const onSubmit: SubmitHandler<ColorProductCreateI> = async (data) => {
    handleColors(data);
    setImages([]);
    reset();
    ShowToast("New Color Added!", "success");
    return;
  };

  const addImageForColor = (image: string) => {
    if (images.length < 4) {
      const currentImages = getValues("images") || [];
      setImages([...currentImages, image]);
      setValue("images", [...currentImages, image]);
    }
  };

  const removeImage = (index: number) => {
    const currentImages = getValues("images") || [];
    const updatedImages = currentImages.filter((_, i) => i !== index);
    setImages(updatedImages);
    setValue("images", updatedImages);
  };

  const formattedColors = data && formatOptions(data);
  const handleColorsSelect = handleSingleSelect("name", setValue);

  return (
    <form className="rounded-md flex flex-col gap-6 bg-custom-secondaryBrand shadow-md  p-10" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-center text-xl font-semibold"> COLORS </h2>
      {formattedColors && <InputSelect onchange={handleColorsSelect} label="color" list={formattedColors} />}
      <div className="flex gap-6 w-full mt-5">
        <ImageDragDrop handleImages={addImageForColor} max={4} current={images.length} />
        {images?.length > 0 && (
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            {images.map((item, index_image) => (
              <div key={index_image} className="group relative w-fit h-fit">
                <img alt="Uploaded" src={item} className="w-24 h-28 rounded-md shadow-md" />
                <button className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex" type="button" onClick={() => removeImage(index_image)}>
                  <TbX size={20} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end gap-6 mt-5">
        <button type="submit" className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">
          {colors.length === 0 ? "Add Color" : " Add Other"}
        </button>
        <button onClick={nextTabIndex} type="button" className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">
          next
        </button>
      </div>
      {colors.length > 0 && (
        <div className="flex gap-4">
          {colors.map((field, index) => (
            <div key={index} className="group relative w-fit h-fit">
              <div className="absolute flex justify-between p-2 text-xs font-semibold"></div>
              <img alt="Uploaded" src={field.images[0]} className="w-20 h-28 rounded-md shadow-md" />
              <button onClick={() => removeColor(index)} type="button" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex">
                <TbX size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}
