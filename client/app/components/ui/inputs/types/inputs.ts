/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import * as FaIcons from "react-icons/fa";
import { FocusEvent } from "react";

type ChangeHandler = (value: string) => void;
type FocusHandler = (event: FocusEvent<HTMLInputElement>) => void;
type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export interface InputPropsI {
  type: string;
  label: string;
  name: string;
  register: Function;
  focus?: FocusHandler;
  change?: ChangeHandler;
  maxlength?: number;
  minlength?: number;
  required?: boolean;
  autofocus?: boolean;
  classname?: string;
  placeholder: string;
  error?: string;
  value?: string;
  defaultvalue?: string;
}

export interface InputPasswordPropsI {
  disabled?: boolean;
  name: string;
  label: string;
  classname: string;
  register: Function;
  error?: string;
  defaultvalue?: string | number;
}

export interface InputSubmitPropsI {
  type: "button" | "submit" | "reset";
  icon: keyof typeof IconsMapSubmit;
  content: string;
  classname?: string;
  error?: string;
  disabled?: boolean;
  onclick?: ClickHandler;
}

export const IconsMapSubmit = {
  FaStar: FaIcons.FaStar,
  FaArrowRight: FaIcons.FaArrowRight,
  FaHome: FaIcons.FaHome,
};
