import { Settings } from "@/app/api/settings/settings.api";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSelect, InputSelectCreatable } from "@/app/components/ui/inputs/input-select";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { useAdmin } from "@/app/contexts/admin.context";
import { GeneralProductCreateI, SchemaGeneralProductCreateI } from "@/app/entities/schemas.entitie";
import { formatOptions, handleMultiSelect, handleSingleSelect } from "@/app/utils/masks.util";
import { TabPanel } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

export function GeneralInfoProductCreate() {
  const { data } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const [brands, stores, categories] = await Promise.all([Settings.getBrands(), Settings.getStores(), Settings.getCategories()]);
      return { brands, stores, categories };
    },
  });
  const { setGeneralProductCreate, setTabProductCreate } = useAdmin();
  const { register, handleSubmit, setValue, formState } = useForm<GeneralProductCreateI>({ resolver: yupResolver(SchemaGeneralProductCreateI) });
  const formattedBrands = data?.brands && formatOptions(data?.brands);
  const formattedStores = data?.stores && formatOptions(data?.stores);
  const formattedCategories = data?.categories && formatOptions(data?.categories);

  const handleBrands = handleSingleSelect("brand", setValue);
  const handleStores = handleSingleSelect("store", setValue);
  const handleCategories = handleMultiSelect("categories", setValue);
  const handleFlags = handleMultiSelect("flags", setValue, false);
  const handleDetails = handleMultiSelect("details", setValue, false);

  const onSubmit: SubmitHandler<GeneralProductCreateI> = async (data) => {
    setGeneralProductCreate(data);
    setTabProductCreate(1);
    return;
  };

  return (
    <TabPanel padding="0" margin="30px 0 50px 0">
      <form className="flex w-full p-10 justify-center gap-6 bg-custom-secondaryBrand rounded-md shadow-md" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full rounded-md h-fit flex flex-col gap-6">
          <h2 className="text-center text-xl font-semibold">GENERAL INFO</h2>
          <InputDefault type="text" label="title" placeholder="enter a title" name="title" register={register} error={formState.errors?.title?.message} autofocus={true} />
          <InputDefault type="text" label="summary" placeholder="enter a summary" name="summary" register={register} error={formState.errors?.summary?.message} />
          <InputDefault type="text" label="condition" placeholder="enter a condition" name="condition" register={register} error={formState.errors?.condition?.message} />
          <div className="flex gap-6">
            <InputDefault type="text" label="price" placeholder="enter a price" name="price" register={register} error={formState.errors?.price?.message} />
            <InputDefault type="text" label="last price" placeholder="enter a last price" name="last_price" register={register} error={formState.errors?.last_price?.message} />
            <InputDefault type="number" label="max installments" placeholder="enter a max installments" name="installments" register={register} error={formState.errors?.installments?.message} />
          </div>
          <div className="flex gap-6">
            {formattedBrands && <InputSelect onchange={handleBrands} label="brand" list={formattedBrands} />}
            {formattedStores && <InputSelect onchange={handleStores} label="store" list={formattedStores} />}
          </div>
          {formattedCategories && <InputSelect isMulti onchange={handleCategories} label="categories " list={formattedCategories} />}
          <InputSelectCreatable isMulti onchange={handleFlags} label="flags" list={[]} />
          <InputSelectCreatable isMulti onchange={handleDetails} label="details" list={[]} />
          <InputSubmit type="submit" content="next" icon="FaArrowRight" classname="mt-5 w-full" />
        </div>
      </form>
    </TabPanel>
  );
}
