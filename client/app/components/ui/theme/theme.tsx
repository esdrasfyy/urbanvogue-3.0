import { extendTheme } from "@chakra-ui/react";

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
});
