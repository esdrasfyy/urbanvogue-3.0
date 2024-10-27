"use client";
import { Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { InputSelectSingle } from "@/app/components/ui/inputs/input-select";
import { InputDefault } from "@/app/components/ui/inputs/input-default";
import { InputSubmit } from "@/app/components/ui/inputs/input-submit";
import { InputDate } from "@/app/components/ui/inputs/input-data";
import { Settings } from "@/app/api/settings/settings.api";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUser } from "@/app/contexts/user.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useApp } from "@/app/contexts/app.context";
import { useQuery } from "@tanstack/react-query";
import { trans } from "@/app/libs/i18n.lib";
import { useRouter } from "next/navigation";
import { InputsProfileI, SchemaProfileI } from "@/app/entities/schemas.entitie";

function Profile() {
  const { setLoading, ShowToast } = useApp();
  const { user } = useUser();
  const route = useRouter();

  const { data: countries } = useQuery({
    queryFn: Settings.getCountries,
    queryKey: ["countries"],
  });

  const { data: genders } = useQuery({
    queryFn: Settings.getGenders,
    queryKey: ["genders"],
  });

  const { register, handleSubmit, setValue, formState } = useForm<InputsProfileI>({ resolver: yupResolver(SchemaProfileI) });

  const onSubmit: SubmitHandler<InputsProfileI> = async (data) => {
    try {
      console.log(data);

      setLoading(true);
      // const status = await Auth.forgotPassword(data);

      // if (status === 500) {
      //   throw new Error("Contact support!");
      // }

      ShowToast("Email sent!", "If there is an account with that email, the code has been sent to it.", "success");
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
  return (
    <Modal blockScrollOnMount={false} isOpen={true} onClose={() => route.back()} isCentered>
      <ModalOverlay bg="none" backdropFilter="saturate(150%) blur(4px)" backdropInvert="50%" backdropBlur="3px" />
      <ModalContent backgroundColor="var(--primary-brand-color)" textColor="var(--text-color)" borderRadius="7px" margin="0px 14px">
        <ModalHeader>{trans.t("Change your password")}</ModalHeader>
        <ModalBody>
          <p className="mb-4 text-sm text-custom-textColor">{trans.t("Enter your email address and we'll send you a code to reset your password.")}</p>
          <form className="flex w-full flex-col justify-center pb-3 gap-6" onSubmit={handleSubmit(onSubmit)}>
            <InputDefault type="text" label="Username" placeholder="Enter your username" name="username" register={register} error={formState.errors?.username?.message} autofocus={true} />
            <InputDefault type="text" label="fullname" placeholder="Enter your fullname" name="fullname" register={register} error={formState.errors?.fullname?.message} />
            <div className="flex justify-between w-full gap-6 max-sm:flex-wrap max-sm:gap-0">
              <InputDate label="birthdate" name="birthdate" register={register} error={formState.errors.birthdate?.message} />
              <InputDefault type="text" label="CPF" placeholder="enter national ID" name="national_id" register={register} error={formState.errors?.national_id?.message} defaultvalue={user?.cpf} />
            </div>
            {formattedGenders && <InputSelectSingle onchange={handleGender} label="Genders" list={formattedGenders} />}
            {formattedCountries && <InputSelectSingle onchange={handleCountry} label="Country" list={formattedCountries} />}
            <InputSubmit type="submit" content="Send" icon="FaArrowRight" classname="mt-5" />
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Profile;
