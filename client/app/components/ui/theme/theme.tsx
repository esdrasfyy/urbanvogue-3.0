import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    accent: "var(--accent-color)",
    text: "var(--color-text)",
    bg: {
      primary: "var(--bg-primary)",
      secondary: "var(--bg-secondary)",
    },
  },
});
