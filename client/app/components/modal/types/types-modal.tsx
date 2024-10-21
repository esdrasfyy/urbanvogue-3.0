import * as yup from "yup";

export type InputsForgotPasswordI = {
  email: string;
};

export const SchemaForgotPasswordI = yup.object().shape({
  email: yup.string().email("must be a valid email!").required("this field is required!"),
});
