/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from "../components/ui/theme/theme";

export const customStylesSelect = {
  control: (base: any) => ({
    ...base,
    background: theme.colors.primary,
    padding: "1.5px 6px",
    color: theme.colors.text,
    fontWeight: "600",
    outline: "none",
    cursor: "pointer",
    borderColor: theme.colors.text,
    boxShadow: `0 0 0 1px #FFFFFF0`,
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: `0 0 0 1px ${theme.colors.accent}`,
      borderColor: theme.colors.accent,
    },
    "&:focus": {
      boxShadow: `0 0 0 1px ${theme.colors.accent}`,
      borderColor: theme.colors.accent,
    },
  }),
  menu: (base: any) => ({
    ...base,
    background: theme.colors.secondary,
  }),
  menuList: (base: any) => ({
    ...base,
  }),
  option: (base: any) => ({
    ...base,
    background: theme.colors.secondary,
    color: theme.colors.text,
    "&:hover": {
      backgroundColor: theme.colors.tertiary,
    },
    cursor: "pointer",
  }),
};
