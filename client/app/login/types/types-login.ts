import { passwordRegex } from "@/app/utils/regex";
import * as yup from "yup";

export type InputsLoginI = {
  credential: string;
  password: string;
};

export type FormLoginPropsI = {
  loading: boolean;
  handleLoading: () => void;
};

export const SchemaLoginI = yup.object().shape({
  credential: yup
    .string()
    .required("this field is required!")
    .min(8, "minimum characters are 8."),
  password: yup
    .string()
    .min(8, "minimum characters are 8.")
    .matches(passwordRegex, {
      message:
        "password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("this field is required!"),
});
