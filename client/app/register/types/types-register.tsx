import { passwordRegex } from "@/app/utils/regex";
import * as yup from "yup";

export type InputsRegisterI = {
  username: string;
  email: string;
  password: string;
  terms?: boolean;
};

export const SchemaRegisterI = yup.object().shape({
username: yup
  .string()
  .required("This field is required")
  .min(5, "Username must be at least 5 characters long.")
  .max(15, "Username cannot be longer than 15 characters.")
  .matches(/^\S+$/, "Username cannot contain spaces.")
  .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores."),
  email: yup
    .string()
    .email("must be a valid email!")
    .required("This field is required!"),
  password: yup
    .string()
    .min(8, "Minimum characters are 8.")
    .matches(passwordRegex, {
      message:
        "Password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("This field is required!"),
  terms: yup.boolean(),
});
