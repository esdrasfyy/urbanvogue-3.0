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
    .required("this field is required!")
    .min(5, "username must be at least 5 characters long.")
    .max(15, "username cannot be longer than 15 characters.")
    .matches(/^\S+$/, "Username cannot contain spaces.")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "username can only contain letters, numbers, and underscores."
    ),
  email: yup
    .string()
    .email("must be a valid email!")
    .required("this field is required!"),
  password: yup
    .string()
    .min(8, "minimum characters are 8.")
    .matches(passwordRegex, {
      message:
        "password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("this field is required!"),
  terms: yup.boolean(),
});
