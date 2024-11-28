import { Admin } from "@/app/@types/admin";
import { Settings } from "@/app/api/settings/settings.api";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSelect, InputSelectCreatable } from "@/app/components/ui/inputs/input-select";
import { useApp } from "@/app/contexts/app.context";
import { SchemaSizesProductCreateI, SizesProductCreateI } from "@/app/entities/schemas.entitie";
import { formatOptions, handleSingleSelect } from "@/app/utils/masks.util";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

export function SizesPorductCreate({ handleSizes, removeSize, sizes }: Admin.SizesProductCreateProps) {
  const { data } = useQuery({
    queryKey: ["sizes"],
    queryFn: Settings.getSizes,
  });
  const { ShowToast } = useApp();

  const { register, handleSubmit, setValue, formState, reset } = useForm<SizesProductCreateI>({ resolver: yupResolver(SchemaSizesProductCreateI) });
  const onSubmit: SubmitHandler<SizesProductCreateI> = async (data) => {
    console.log(data);

    handleSizes(data);
    reset();
    ShowToast("New Size Added!", "success");
    return;
  };
  const formattedSizes = data && formatOptions(data);
  const handleSizesSelect = handleSingleSelect("name", setValue);

  return (
    <div className="rounded-md flex flex-col gap-6 bg-custom-secondaryBrand shadow-md my-12 p-10">
      <h2 className="text-center text-xl font-semibold"> SIZES </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        {formattedSizes && <InputSelect isMulti onchange={handleSizesSelect} label="colors" list={formattedSizes} />}
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
            {sizes.length === 0 ? "Add Size" : " Add Other"}
          </button>
        </div>
      </form>
      {sizes.length > 0 && (
        <div>
          {sizes.map((size, index_size) => (
            <div key={index_size}>
              <p>Size: {size.name}</p>
              <p>Qtd: {size.qtd}</p>
              <p>Incremenent: {size.increment}</p>
              <p>Decrement: {size.decrement}</p>
              <button onClick={() => removeSize(index_size)}>remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
