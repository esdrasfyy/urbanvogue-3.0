import { Settings } from "@/app/api/settings/settings.api";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSelect, InputSelectCreatable } from "@/app/components/ui/inputs/input-select";
import { useAdmin } from "@/app/contexts/admin.context";
import { useApp } from "@/app/contexts/app.context";
import { SchemaSizesProductCreateI, SizesProductCreateI } from "@/app/entities/schemas.entitie";
import { formatOptions, handleMultiSelect, handleSingleSelect } from "@/app/utils/masks.util";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

export function SizesPorductCreate() {
  const { data } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const [sizes, colors] = await Promise.all([Settings.getSizes(), Settings.getColors()]);
      return { sizes, colors };
    },
  });
  const { sizesProductCreate, setSizesProductCreate, colorsProductCreate, setColorsProductCreate } = useAdmin();
  const { ShowToast } = useApp();
  const { register, handleSubmit, setValue, formState, reset } = useForm<SizesProductCreateI>({ resolver: yupResolver(SchemaSizesProductCreateI) });
  const formattedSizes = data?.sizes && formatOptions(data?.sizes);
  let colorslist: { id: number; name: string }[] = [];
  
  if (Array.isArray(colorsProductCreate)) {
    colorslist = colorsProductCreate?.map((e, index) => ({
      id: index,
      name: data?.colors?.find((i) => i.id === +e.name)?.name || "",
    }));
  }

  const formattedColors = colorsProductCreate && formatOptions(colorslist);
  const handleSizesSelect = handleSingleSelect("name", setValue);
  const handleColorsIndexSelect = handleMultiSelect("colors", setValue);

  const onSubmit: SubmitHandler<SizesProductCreateI> = async ({ colors, ...rest }) => {
    for (let i = 0; i < colors.length; i++) {
      setColorsProductCreate((prevColors) =>
        prevColors.map((e) =>
          +e.name === +prevColors[+colors[i]].name
            ? {
                ...e,
                sizes: [
                  ...(e.sizes || []),
                  {
                    name: (data && data.sizes && data?.sizes[+rest.name]?.name) || "",
                    qtd: rest.qtd,
                    increment: rest.increment,
                    decrement: rest.decrement,
                  },
                ],
              }
            : e
        )
      );
    }

    reset();
    ShowToast("New Size Added!", "success");
    return;
  };

  return (
    <div className="rounded-md flex flex-col gap-6 bg-custom-secondaryBrand shadow-md my-12 p-10">
      <h2 className="text-center text-xl font-semibold"> SIZES </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        {formattedColors && <InputSelect isMulti onchange={handleColorsIndexSelect} label="colors" list={formattedColors} />}
        <div className="flex gap-6">
          {formattedSizes && <InputSelectCreatable onchange={handleSizesSelect} label="size" list={formattedSizes} />}
          <InputDefault type="number" label="quantity" placeholder="enter a quantity" name="qtd" register={register} error={formState.errors?.qtd?.message} />
        </div>
        <div className="flex gap-6">
          <InputDefault type="text" label="increment" placeholder="enter a increment" name="increment" register={register} error={formState.errors?.increment?.message} />
          <InputDefault type="text" label="decrement" placeholder="enter a decrement" name="decrement" register={register} error={formState.errors?.decrement?.message} />
        </div>
        <div className="flex justify-end gap-6 mt-5">
          <button type="submit" className="border border-custom-accentColor rounded-md shadow-md p-2 uppercase text-xs font-semibold hover-effect hover-bg-accent">
            {sizesProductCreate.length === 0 ? "Add Size" : " Add Other"}
          </button>
        </div>
      </form>
      {sizesProductCreate.length > 0 && (
        <div>
          {sizesProductCreate.map((size, index_size) => (
            <div key={index_size}>
              <p>Size: {size.name}</p>
              <p>Colors: {size.name}</p>
              <p>Qtd: {size.qtd}</p>
              <p>Incremenent: {size.increment}</p>
              <p>Decrement: {size.decrement}</p>
              <button onClick={() => setSizesProductCreate(sizesProductCreate.filter((_, i) => i !== index_size))}>remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
