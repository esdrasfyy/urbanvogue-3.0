import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        custom: {
          primaryBrand: "var(--primary-brand-color)",
          secondaryBrand: "var(--secondary-brand-color)",
          tertiaryBrand: "var(--tertiary-brand-color)",
          accentColor: "var(--accent-color)",
          accentColorOpacity: "var(--accent-color-10)",
          textColor: "var(--text-color)",
          error: "#cf6679",
          success: "#4caf50",
          warning: "#ff9800",
        },
      },
    },
    fontFamily: {
      logo: ["var(--logo-font)"],
      in: ["var(--font-in)"],
    },
  },
  plugins: [require("flowbite/plugin")],
};

export default config;
