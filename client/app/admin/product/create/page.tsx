"use client";
import { InputSelect, InputSelectCreatable } from "@/app/components/ui/inputs/input-select";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { Settings } from "@/app/api/settings/settings.api";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApp } from "@/app/contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { InputsAdminProductCreateI, SchemaAdminProductCreateI } from "@/app/entities/schemas.entitie";
import { InputCheckbox } from "@/app/components/ui/inputs/input-checkbox";
import { useEffect, useState } from "react";
import { formatOptions, handleMultiSelect, handleSingleSelect } from "@/app/utils/masks.util";
import { ImageDragDrop } from "@/app/components/drag-drop/image-drag-drop";
import { TbX } from "react-icons/tb";

function ProductCreate() {
  const { setLoading, ShowToast } = useApp();
  const { data: brands } = useQuery({
    queryFn: Settings.getBrands,
    queryKey: ["brands"],
  });

  const { data: stores } = useQuery({
    queryFn: Settings.getStores,
    queryKey: ["stores"],
  });

  const { data: categories } = useQuery({
    queryFn: Settings.getCategories,
    queryKey: ["categories"],
  });

  const { register, handleSubmit, setValue, formState, control, getValues } = useForm<InputsAdminProductCreateI>({ resolver: yupResolver(SchemaAdminProductCreateI) });

  useEffect(() => {
    console.log(formState.errors);
    console.log(getValues());
  }, [formState.errors]);

  const onSubmit: SubmitHandler<InputsAdminProductCreateI> = async (data) => {
    console.log(data);
    return;
  };

  const formattedBrands = brands && formatOptions(brands);
  const formattedStores = stores && formatOptions(stores);
  const formattedCategories = categories && formatOptions(categories);

  const handleBrands = handleSingleSelect("brand", setValue);
  const handleStores = handleSingleSelect("store", setValue);
  const handleCategories = handleMultiSelect("categories", setValue);
  const handleFlags = handleMultiSelect("flags", setValue, false);
  const handleDetails = handleMultiSelect("details", setValue, false);

  const { fields, remove } = useFieldArray({
    control,
    name: "colors",
  });

  const handleAddColor = () => {
    const currentValues = getValues();
    const last_color = currentValues.colors[currentValues.colors.length - 1];
    if (currentValues.colors.length > 0 && last_color.name === "") {
      return;
    }
    setValue("colors", [...currentValues.colors, { name: "", images: [], qtd: 0, increment: 0, decrement: 0 }]);
  };

  const handleImages = (image: string, index: number) => {
    const currentValues = getValues();
    const updatedColors = [...currentValues.colors];
    if (updatedColors[index].images.length > 5) return;
    updatedColors[index] = {
      ...updatedColors[index],
      images: [...(updatedColors[index].images || []), image],
    };

    setValue("colors", updatedColors);
  };

  return (
    <main className="max-w-[calc(100%-385px)] bg-custom-secondaryBrand mx-6 ml-auto rounded-md shadow-md p-3 flex flex-col gap-4 ">
      <form className="flex w-full justify-center pb-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full p-3 bg-custom-primaryBrand rounded-md h-fit flex flex-col gap-4">
          <h2 className="text-center text-xl font-semibold">General Info</h2>
          <InputDefault type="text" label="title" placeholder="enter a title" name="title" register={register} error={formState.errors?.title?.message} autofocus={true} />
          <InputDefault type="text" label="summary" placeholder="enter a summary" name="summary" register={register} error={formState.errors?.summary?.message} />
          <InputDefault type="text" label="condition" placeholder="enter a condition" name="condition" register={register} error={formState.errors?.condition?.message} />
          <div className="flex gap-4">
            <InputDefault type="text" label="price" placeholder="enter a price" name="price" register={register} error={formState.errors?.price?.message} />
            <InputDefault type="text" label="last price" placeholder="enter a last price" name="last_price" register={register} error={formState.errors?.last_price?.message} />
          </div>
          <InputCheckbox error={formState.errors?.parcelable?.message} register={register} name="parcelable">
            IS PARCELABLE
          </InputCheckbox>
          <InputDefault type="number" label="max installments" placeholder="enter a max installments" name="installments" register={register} error={formState.errors?.installments?.message} />
          {formattedBrands && <InputSelect onchange={handleBrands} label="brand" list={formattedBrands} />}
          {formattedStores && <InputSelect onchange={handleStores} label="store" list={formattedStores} />}
          {formattedCategories && <InputSelect isMulti onchange={handleCategories} label="categories " list={formattedCategories} />}
          <InputSelectCreatable isMulti onchange={handleFlags} label="flags" list={[]} />
          <InputSelectCreatable isMulti onchange={handleDetails} label="details" list={[]} />
          <InputSubmit type="submit" content="create" icon="FaArrowRight" classname="mt-5 w-full" />
        </div>
      </form>
      <div className="w-full flex flex-col gap-6">
        <div className="bg-custom-primaryBrand p-3 rounded-md flex flex-col gap-5">
          <h2 className="text-center text-xl font-semibold">Add Color Or Variation</h2>

          {fields.map((field, index) => {
            // Verifica se o item é o último item (a nova cor)
            const isNewColor = index === fields.length - 1;

            return (
              <div key={field.id} className="flex flex-col gap-4 border-b pb-4">
                {/* Inputs exibidos apenas para a nova cor */}
                {isNewColor ? (
                  <>
                    <div className="flex gap-4">
                      <InputDefault type="text" label="Color" placeholder="Enter a color" name={`colors.${index}.name`} register={register} error={formState.errors.colors?.[index]?.name?.message} />
                      <InputDefault type="number" label="Quantity" placeholder="Enter a quantity" name={`colors.${index}.qtd`} register={register} error={formState.errors.colors?.[index]?.qtd?.message} />
                    </div>

                    <div className="flex gap-4">
                      <InputDefault type="number" label="Increment" placeholder="Enter an increment" name={`colors.${index}.increment`} register={register} error={formState.errors.colors?.[index]?.increment?.message} />
                      <InputDefault type="number" label="Decrement" placeholder="Enter a decrement" name={`colors.${index}.decrement`} register={register} error={formState.errors.colors?.[index]?.decrement?.message} />
                    </div>
                    <div>
                      <ImageDragDrop handleImages={handleImages} index={index} />
                      <div className="grid grid-cols-3 gap-3">
                        {field.images.map((item, index) => (
                          <div key={index} className="group relative w-fit h-fit">
                            <img alt="Uploaded" src={item} className="w-32 h-28 rounded-md shadow-md" />
                            <button className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex">
                              <TbX size={20} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button type="button" onClick={() => remove(index)}>
                      Remove Colors
                    </button>
                  </>
                ) : (
                  // Parágrafos para as cores já adicionadas
                  <div className="mt-4">
                    <p>
                      <strong>Color Name:</strong> {field.name}
                    </p>
                    <p>
                      <strong>Quantity:</strong> {field.qtd}
                    </p>
                    <p>
                      <strong>Increment:</strong> {field.increment}
                    </p>
                    <p>
                      <strong>Decrement:</strong> {field.decrement}
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {field.images.map((item, index) => (
                        <div key={index} className="group relative w-fit h-fit">
                          <img alt="Uploaded" src={item} className="w-32 h-28 rounded-md shadow-md" />
                          <button className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full shadow-md bg-custom-primaryBrand opacity-80 items-center justify-center text-custom-textColor font-medium hover-effect hover-no-opacity hidden group-hover:flex cursor-pointer max-sm:flex">
                            <TbX size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Botão de Remover Color apenas para as cores existentes */}
                {!isNewColor && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove Color
                  </button>
                )}
              </div>
            );
          })}

          {/* Botão para adicionar uma nova cor */}
          <button type="button" onClick={handleAddColor}>
            Add Other Color
          </button>
        </div>
        {/* <div className="bg-custom-primaryBrand p-3 rounded-md flex flex-col gap-4">
          <h2 className="text-center text-xl font-semibold">Add Size Or Varation</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {formattedCountries && <InputSelect onchange={handleCountry} label="flags" list={formattedCountries} />}
              <InputDefault type="text" label="quantity" placeholder="enter a quantity" name="condition" register={register} error={formState.errors?.condition?.message} />
            </div>
            <div className="flex gap-4">
              <InputDefault type="text" label="increment" placeholder="enter a increment" name="condition" register={register} error={formState.errors?.condition?.message} />
              <InputDefault type="text" label="decrement" placeholder="enter a decrement" name="condition" register={register} error={formState.errors?.condition?.message} />
            </div>
            <InputSubmit type="button" content="Add Size" icon="FaArrowRight" classname="mt-5 w-full" />
          </div>
        </div> */}
      </div>
    </main>
  );
}

export default ProductCreate;
