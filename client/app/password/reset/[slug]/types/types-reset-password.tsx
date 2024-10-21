import { passwordRegex } from "@/app/utils/regex";
import * as yup from "yup";

export type InputsResetPasswordI = {
  email: string;
  password: string;
  repeat_password: string;
};

export const SchemaResetPasswordI = yup.object().shape({
  email: yup.string().email("must be a valid email!").required("this field is required!"),
  password: yup
    .string()
    .min(8, "minimum characters are 8.")
    .matches(passwordRegex, {
      message: "password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("this field is required!"),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password")], "passwords do not match.")
    .required("this field is required!"),
});
