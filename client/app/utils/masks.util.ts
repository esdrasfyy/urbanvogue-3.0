import { UseFormSetValue } from "react-hook-form";

export function FormatNationalID(value: string) {
  const country = ["pt", "en"];

  value = value.replace(/\D/g, "");

  switch (country[0]) {
    case "pt":
      value = value.slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})/, "$1-$2");
      return value;

    case "en":
      value = value.slice(0, 9);
      value = value.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
      return value;

    default:
      return value;
  }
}

export const formatOptions = (items: { id: number; name: string }[]) =>
  items?.map((item) => ({
    value: String(item.id),
    label: item.name,
  }));

export const handleSingleSelect = (name: string, setValue: UseFormSetValue<any>) => (data: { value: string; label: string }) => {
  setValue(name, Number(data.value));
};

export const handleMultiSelect =
  (name: string, setValue: UseFormSetValue<any>, isNumber: boolean = true) =>
  (data: { value: string; label: string }[]) => {
    let values;
    if (isNumber) values = data.map((item) => Number(item.value));
    if (!isNumber) values = data.map((item) => item.value);
    setValue(name, values);
  };
