import { extendTheme } from "@chakra-ui/react";

type ThemeColors = {
  primary: string;
  secondary: string;
  tertiary: string;
  accent: string;
  accent_10: string;
  text: string;
  bg: {
    primary: string;
    secondary: string;
  };
};

type CustomTheme = {
  colors: ThemeColors;
};

export const theme = extendTheme({
  colors: {
    primary: "var(--primary-brand-color)",
    secondary: "var(--secondary-brand-color)",
    tertiary: "var(--tertiary-brand-color)",
    accent: "var(--accent-color)",
    accent_10: "var(--accent-color-10)",
    text: "var(--color-text)",
    bg: {
      primary: "var(--primary-brand-color)",
      secondary: "var(--secondary-brand-color)",
    },
  },
}) as CustomTheme;
