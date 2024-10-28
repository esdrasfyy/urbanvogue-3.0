"use client";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { InputSelectSingle } from "@/app/components/ui/inputs/input-select";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { InputDate } from "@/app/components/ui/inputs/input-data";
import { Settings } from "@/app/api/settings/settings.api";
import { SubmitHandler, useForm, UseFormGetValues } from "react-hook-form";
import { useUser } from "@/app/contexts/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApp } from "@/app/contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { trans } from "@/app/libs/i18n.lib";
import { useRouter } from "next/navigation";
import { InputsProfileI, SchemaProfileI } from "@/app/entities/schemas.entitie";
import { Account } from "@/app/api/user/notifications.api";
import { useState } from "react";
import { format } from "date-fns";

const isChanged = (getValues: UseFormGetValues<InputsProfileI>, user: Account.UserI): boolean => {
  const currentValues = getValues();
  const fieldsToCheck: (keyof InputsProfileI)[] = ["username", "fullname", "birthdate", "gender_id", "country_id", "national_id"];

  return fieldsToCheck.some((field) => {
    const currentValue = currentValues[field];
    const userValue = user?.[field];
    if (currentValue && userValue && field === "birthdate" && currentValue !== format(new Date(userValue), "yyyy-MM-dd")) {
      return true;
    }
    return currentValue !== undefined && currentValue !== null && currentValue !== "" && currentValue !== userValue;
  });
};

function Profile() {
  const { setLoading, ShowToast } = useApp();
  const { user, setUser } = useUser();
  const [canClose, setCanClose] = useState<boolean>(false);
  const route = useRouter();

  const { data: countries } = useQuery({
    queryFn: Settings.getCountries,
    queryKey: ["countries"],
  });

  const { data: genders } = useQuery({
    queryFn: Settings.getGenders,
    queryKey: ["genders"],
  });

  const { register, handleSubmit, setValue, formState, getValues, reset } = useForm<InputsProfileI>({ resolver: yupResolver(SchemaProfileI) });

  const onSubmit: SubmitHandler<InputsProfileI> = async (data) => {
    try {
      if (!isChanged(getValues, user!)) return;
      setLoading(true);
      const status = await Account.edit(data);

      if (status === 500) {
        throw new Error("Contact support!");
      }
      /* eslint-disable @typescript-eslint/no-explicit-any */
      setUser((prev: any) => {
        if (prev) {
          return {
            ...prev,
            username: data.username,
            fullname: data.fullname,
            birthdate: data.birthdate && new Date(data?.birthdate),
            national_id: data.national_id,
            gender_id: Number(data.gender_id),
            country_id: Number(data.country_id),
          };
        }
        return null;
      });
      /* eslint-enable @typescript-eslint/no-explicit-any */
      reset();
      route.back();
      ShowToast("Perfil atualizado!", "Seus dados foram atualizados com sucesso.", "success");
    } catch (err) {
      if (err instanceof Error) {
        ShowToast("An error occurred!", err.message, "error");
      }
    } finally {
      setLoading(false);
    }
  };

  const formattedCountries = countries?.map((country) => ({
    value: String(country.id),
    label: country.name,
  }));

  const handleCountry = (data: { value: string; label: string }) => {
    setValue("country_id", Number(data.value));
  };

  const formattedGenders = genders?.map((gender) => ({
    value: String(gender.id),
    label: gender.name,
  }));

  const handleGender = (data: { value: string; label: string }) => {
    setValue("gender_id", Number(data.value));
  };

  const onClose = () => {
    if (isChanged(getValues, user!) && !canClose) {
      ShowToast("Nao perca seu progresso!", "Suas mudanças vão sumir se continuar.", "warning");
      setCanClose(true);
      return;
    }
    reset();
    setCanClose(false);
    route.back();
  };
  return (
    <Modal blockScrollOnMount={false} isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
      <ModalContent backgroundColor="var(--primary-brand-color)" textColor="var(--text-color)" borderRadius="7px" margin="0px 14px">
        <ModalHeader>{trans.t("Altere seus dados")}</ModalHeader>
        <ModalBody>
          <form className="flex w-full flex-col justify-center pb-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <InputDefault defaultvalue={user?.username} type="text" label="Username" placeholder="Enter your username" name="username" register={register} error={formState.errors?.username?.message} autofocus={true} />
            <InputDefault defaultvalue={user?.fullname} type="text" label="fullname" placeholder="Enter your fullname" name="fullname" register={register} error={formState.errors?.fullname?.message} />
            <div className="flex justify-between w-full gap-6 max-sm:flex-col">
              <InputDate defaultvalue={user?.birthdate} label="birthdate" name="birthdate" register={register} error={formState.errors.birthdate?.message} />
              <InputDefault type="text" label="CPF" placeholder="enter national ID" name="national_id" register={register} error={formState.errors?.national_id?.message} defaultvalue={user?.national_id} />
            </div>
            {formattedGenders && <InputSelectSingle defaultvalue={String(user?.gender_id)} onchange={handleGender} label="Genders" list={formattedGenders} />}
            {formattedCountries && <InputSelectSingle defaultvalue={String(user?.country_id)} onchange={handleCountry} label="Country" list={formattedCountries} />}
            <InputSubmit type="submit" content="Update" icon="FaArrowRight" classname="mt-5" />
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Profile;
