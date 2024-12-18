import * as yup from "yup";
import { passwordRegex } from "../utils/regex";

const is18YearsOld = (date: Date) => {
  const today = new Date();
  const birthDate = new Date(date);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }

  return age;
};

export interface ForgotPasswordI {
  email: string;
}

export const SchemaForgotPasswordI = yup.object().shape({
  email: yup.string().email("must be a valid email!").required("this field is required!"),
});

export type InputsLoginI = {
  credential: string;
  password: string;
};

export const SchemaLoginI = yup.object().shape({
  credential: yup.string().required("this field is required!").min(8, "minimum characters are 8."),
  password: yup
    .string()
    .min(8, "minimum characters are 8.")
    .matches(passwordRegex, {
      message: "password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("this field is required!"),
});

export type InputsProfileI = {
  fullname?: string | null;
  username: string;
  birthdate?: Date | null;
  national_id?: string | null;
  country_id?: number | null;
  gender_id?: number | null;
};

export const SchemaProfileI = yup.object().shape({
  username: yup
    .string()
    .required("the field is required!")
    .test("username", "username must be between 5 and 15 characters", (value) => {
      if (!value) return true;
      return value.length >= 5 && value.length <= 15 && /^\S+$/.test(value) && /^[a-zA-Z0-9_]+$/.test(value);
    })
    .test("username-format", "username must be between 5 and 15 characters and cannot contain spaces or special characters.", (value) => {
      if (!value) return true;
      return value.length >= 5 && value.length <= 15 && /^\S+$/.test(value) && /^[a-zA-Z0-9_]+$/.test(value);
    }),
  fullname: yup
    .string()
    .transform((value, originalValue) => {
      return originalValue === "" ? null : value;
    })
    .test("fullname", "incorrect format!", (value) => {
      if (!value) return true;
      return /^[A-Z][a-zA-Zà-úÀ-Ú\s'-]{1,}(\s[A-Z][a-zA-Zà-úÀ-Ú\s'-]{1,}){1,}$/.test(value);
    })
    .nullable(),
  birthdate: yup
    .date()
    .transform((value, originalValue) => {
      return originalValue === "" ? null : value;
    })
    .test("is-18-years-old", "must be 18 or older.", (value) => {
      if (!value) return true;
      return is18YearsOld(value) >= 18;
    })
    .nullable(),
  national_id: yup
    .string()
    .transform((value, originalValue) => {
      return originalValue === "" ? null : value;
    })
    .nullable(),
  gender: yup.string().nullable(),
  country: yup.string().nullable(),
});

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
    .matches(/^[a-zA-Z0-9_]+$/, "username can only contain letters, numbers, and underscores."),
  email: yup.string().email("must be a valid email!").required("this field is required!"),
  password: yup
    .string()
    .min(8, "minimum characters are 8.")
    .matches(passwordRegex, {
      message: "password needs an uppercase, lowercase, number, and special character ($, @, #).",
      excludeEmptyString: true,
    })
    .required("this field is required!"),
  terms: yup.boolean(),
});

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

export type GeneralProductCreateI = {
  title: string;
  summary: string;
  condition: string;
  price: number;
  last_price: number;
  parcelable: boolean;
  installments?: number;
  brand: number;
  store: number;
  categories: number[];
  details: string[];
  flags: string[];
};

export const SchemaGeneralProductCreateI = yup.object().shape({
  title: yup.string().required("this field is required!"),
  summary: yup.string().required("this field is required!"),
  condition: yup.string().required("this field is required!"),
  price: yup.number().typeError("O preço deve ser um número").positive("O preço deve ser positivo").max(999999.99, "O preço deve ser menor que 1 milhão").required("this field is required!"),
  last_price: yup.number().typeError("O preço deve ser um número").positive("O preço deve ser positivo").max(999999.99, "O preço deve ser menor que 1 milhão").required("this field is required!"),
  parcelable: yup.boolean().default(false),
  installments: yup.number().max(24, "max 24 parcelas"),
  brand: yup.number().required("Este campo é obrigatório!"),
  store: yup.number().required("Este campo é obrigatório!"),
  categories: yup.array().of(yup.number().required("Cada categoria deve ser uma string")).min(1, "É necessário ter pelo menos uma categoria").max(10, "Não é permitido mais de 10 categorias").required("O campo de categorias é obrigatório"),
  details: yup.array().of(yup.string().required("Detalhes devem ser strings")).max(10, "Não é permitido mais de 10 detalhes").required("O campo de categorias é obrigatório"),
  flags: yup.array().of(yup.string().required("Detalhes devem ser strings")).max(10, "Não é permitido mais de 10 detalhes").required("O campo de categorias é obrigatório"),
});
interface Size {
  name: string;
  qtd: number;
  increment: number;
  decrement: number;
}
export type ColorProductCreateI = {
  sizes?: Size[] | [];
  name: string;
  images: string[];
};

export const SchemaColorsProductCreateI = yup.object().shape({
  name: yup.string().required("this field is required!"),
  images: yup.array().of(yup.string().required("Imagens devem ser strings")).max(4, "Não é permitido mais de 4 imagens").required("O campo de categorias é obrigatório"),
});

export type SizesProductCreateI = {
  colors: number[];
  name: string;
  qtd: number;
  increment: number;
  decrement: number;
};

export const SchemaSizesProductCreateI = yup.object().shape({
  colors: yup.array().of(yup.number().required("Detalhes devem ser strings")).max(10, "Não é permitido mais de 10 detalhes").required("O campo de categorias é obrigatório"),
  name: yup.string().required("this field is required!"),
  qtd: yup.number().integer("Quantidade deve ser um número inteiro").min(0, "Quantidade não pode ser negativa").required("A quantidade é obrigatória"),
  increment: yup.number().typeError("O preço deve ser um número").max(999999.99, "O preço deve ser menor que 1 milhão").default(0),
  decrement: yup.number().typeError("O preço deve ser um número").max(999999.99, "O preço deve ser menor que 1 milhão").default(0),
});
