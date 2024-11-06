"use client";
import { InputSelect, InputSelectCreatable } from "@/app/components/ui/inputs/input-select";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { Settings } from "@/app/api/settings/settings.api";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { InputsAdminProductCreateI, SchemaAdminProductCreateI } from "@/app/entities/schemas.entitie";
import { formatOptions, handleMultiSelect, handleSingleSelect } from "@/app/utils/masks.util";
import { ImageDragDrop } from "@/app/components/drag-drop/image-drag-drop";
import { TbX } from "react-icons/tb";
import Image from "next/image";

function ProductCreate() {
  const { data } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const [brands, stores, categories] = await Promise.all([Settings.getBrands(), Settings.getStores(), Settings.getCategories()]);
      return { brands, stores, categories };
    },
  });

  const { register, handleSubmit, setValue, formState, control, getValues } = useForm<InputsAdminProductCreateI>({ resolver: yupResolver(SchemaAdminProductCreateI), defaultValues: { colors: [{ name: "", decrement: 0, increment: 0, images: [], qtd: 100 }] } });

  const onSubmit: SubmitHandler<InputsAdminProductCreateI> = async (data) => {
    console.log(data);
    return;
  };

  const formattedBrands = data?.brands && formatOptions(data?.brands);
  const formattedStores = data?.stores && formatOptions(data?.stores);
  const formattedCategories = data?.categories && formatOptions(data?.categories);

  const handleBrands = handleSingleSelect("brand", setValue);
  const handleStores = handleSingleSelect("store", setValue);
  const handleCategories = handleMultiSelect("categories", setValue);
  const handleFlags = handleMultiSelect("flags", setValue, false);
  const handleDetails = handleMultiSelect("details", setValue, false);

  const { fields, remove } = useFieldArray({ control, name: "colors" });

  const handleAddColor = () => {
    const currentValues = getValues();
    const last_color = currentValues.colors[currentValues.colors.length - 1];
    if (currentValues.colors.length > 0 && last_color.name === "") {
      return;
    }
    setValue("colors", [...currentValues.colors, { name: "", images: [], qtd: 0, increment: 0, decrement: 0 }]);
  };

  const addImageForColor = (image: string, index: number) => {
    const currentValues = getValues();
    const updatedColors = [...currentValues.colors];
    if (updatedColors[index].images.length >= 4) return;
    updatedColors[index] = {
      ...updatedColors[index],
      images: [...(updatedColors[index].images || []), image],
    };
    setValue("colors", updatedColors);
  };
  const removeImageForColor = (index_color: number, index_image: number) => {
    const currentValues = getValues();
    const updatedColors = [...currentValues.colors];
    if (!updatedColors[index_color]?.images) return;
    const updatedImages = updatedColors[index_color].images.filter((_, i) => i !== index_image);
    updatedColors[index_color] = {
      ...updatedColors[index_color],
      images: updatedImages,
    };
    setValue("colors", updatedColors);
  };

  return (
    <main className="max-w-[calc(100%-385px)] bg-custom-secondaryBrand mx-6 ml-auto rounded-md shadow-md p-3 flex gap-4 ">
      <form className="flex w-full justify-center pb-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full p-3 rounded-md h-fit flex flex-col gap-4">
          <h2 className="text-center text-xl font-semibold">General Info</h2>
          <InputDefault type="text" label="title" placeholder="enter a title" name="title" register={register} error={formState.errors?.title?.message} autofocus={true} />
          <InputDefault type="text" label="summary" placeholder="enter a summary" name="summary" register={register} error={formState.errors?.summary?.message} />
          <InputDefault type="text" label="condition" placeholder="enter a condition" name="condition" register={register} error={formState.errors?.condition?.message} />
          <div className="flex gap-4">
            <InputDefault type="text" label="price" placeholder="enter a price" name="price" register={register} error={formState.errors?.price?.message} />
            <InputDefault type="text" label="last price" placeholder="enter a last price" name="last_price" register={register} error={formState.errors?.last_price?.message} />
            <InputDefault type="number" label="max installments" placeholder="enter a max installments" name="installments" register={register} error={formState.errors?.installments?.message} />
          </div>
          <div className="flex gap-4">
            {formattedBrands && <InputSelect onchange={handleBrands} label="brand" list={formattedBrands} />}
            {formattedStores && <InputSelect onchange={handleStores} label="store" list={formattedStores} />}
          </div>
          {formattedCategories && <InputSelect isMulti onchange={handleCategories} label="categories " list={formattedCategories} />}
          <InputSelectCreatable isMulti onchange={handleFlags} label="flags" list={[]} />
          <InputSelectCreatable isMulti onchange={handleDetails} label="details" list={[]} />
          <InputSubmit type="submit" content="create" icon="FaArrowRight" classname="mt-5 w-full" />
        </div>
      </form>
      <div className="w-full flex flex-col gap-6">
        <div className="p-3 rounded-md flex flex-col gap-5">
          <h2 className="text-center text-xl font-semibold">Add Color Or Variation</h2>
          <div>
            {fields.map((field, index_color) => {
              if (index_color !== fields.length - 1) return;
              return (
                <div key={field.id} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                      <InputDefault type="text" label="Color" placeholder="Enter a color" name={`colors.${index_color}.name`} register={register} error={formState.errors.colors?.[index_color]?.name?.message} />
                      <InputDefault type="number" label="Quantity" placeholder="Enter a quantity" name={`colors.${index_color}.qtd`} register={register} error={formState.errors.colors?.[index_color]?.qtd?.message} />
                    </div>
                    <div className="flex gap-4">
                      <InputDefault type="number" label="Increment" placeholder="Enter an increment" name={`colors.${index_color}.increment`} register={register} error={formState.errors.colors?.[index_color]?.increment?.message} />
                      <InputDefault type="number" label="Decrement" placeholder="Enter a decrement" name={`colors.${index_color}.decrement`} register={register} error={formState.errors.colors?.[index_color]?.decrement?.message} />
                    </div>
                    <div className="flex gap-4 w-full mt-5">
                      <ImageDragDrop handleImages={addImageForColor} index={index_color} max={4} current={field.images.length} />
                      {field.images.length > 0 && (
                        <div className="grid grid-rows-2 grid-flow-col gap-4">
                          {field.images.map((item, index_image) => (
                            <div key={index_image} className="group relative w-fit h-fit">
                              <Image alt="Uploaded" src={item} className="w-24 h-28 rounded-md shadow-md" />
                              <button className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex" onClick={() => removeImageForColor(index_color, index_image)}>
                                <TbX size={20} />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end gap-5 mt-5">
                      <button type="button" onClick={() => remove(index_color)} className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">Remove</button>
                      <button type="button" onClick={handleAddColor} className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">Add Other</button>
                    </div>
                  </div>
                </div>
              )})}
          </div>

          {fields.length > 1 && (
            <div className="flex gap-4">
              {fields.map((field, index) => {
                if (index === fields.length - 1) return;
                return (
                  <div key={index} className="group relative w-fit h-fit">
                    <div className="absolute flex justify-between p-2 text-xs font-semibold">
                      <span className="text-custom-success">R$ +{Number(field.increment).toFixed(2)}</span>
                      <span className="text-custom-error">R$ -{Number(field.decrement).toFixed(2)}</span>
                    </div>
                    <img alt="Uploaded" src={field.images[0]} className="w-20 h-28 rounded-md shadow-md" />
                    <button onClick={() => remove(index)} type="button" className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex"><TbX size={20} /></button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="p-3 rounded-md flex flex-col gap-4">
          <h2 className="text-center text-xl font-semibold">Add Size Or Varation</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {formattedCategories && <InputSelect isMulti onchange={handleCategories} label="sizes " list={formattedCategories} />}
              <InputDefault type="number" label="quantity" placeholder="enter a quantity" name="condition" register={register} error={formState.errors?.condition?.message} />
            </div>
            <div className="flex gap-4">
              <InputDefault type="text" label="increment" placeholder="enter a increment" name="condition" register={register} error={formState.errors?.condition?.message} />
              <InputDefault type="text" label="decrement" placeholder="enter a decrement" name="condition" register={register} error={formState.errors?.condition?.message} />
            </div>
            <div className="flex justify-end gap-5 mt-5">
              <button type="button" className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">Remove</button>
              <button type="button" className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">Add Other</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductCreate;
