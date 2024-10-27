/* eslint-disable */
import * as FaIcons from "react-icons/fa";
import { ChangeEventHandler } from "react";
const IconsMapSubmit = {
  FaStar: FaIcons.FaStar,
  FaArrowRight: FaIcons.FaArrowRight,
  FaHome: FaIcons.FaHome,
};

export declare namespace Inputs {
  interface DefaultPropsI {
    type: string;
    label: string;
    name: string;
    register: Function;
    change?: ChangeEventHandler<HTMLInputElement>;
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

  interface PasswordPropsI {
    disabled?: boolean;
    name: string;
    label: string;
    classname?: string;
    register: Function;
    error?: string;
    defaultvalue?: string | number;
  }

  interface SubmitPropsI {
    type: "button" | "submit" | "reset";
    icon: keyof typeof IconsMapSubmit;
    content: string;
    classname?: string;
    error?: string;
  }

  interface CheckboxPropsI {
    children: React.ReactNode;
    error?: string;
    disabled?: boolean;
    register: Function;
    classname?: string;
    name: string;
  }

  interface DatePropsI {
    label: string;
    name: string;
    register: Function;
    required?: boolean;
    error?: string;
    defaultvalue?: string;
  }

  interface Option {
    value: string;
    label: string;
  }
  interface SelectPropsI {
    label: string;
    defaultvalue?: string;
    list: Option[];
    onchange: Function;
  }
}
