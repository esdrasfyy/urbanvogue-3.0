import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        custom: {
          primaryBrand: "#171a1b",
          secondaryBrand: "#1d2123",
          tertiaryBrand: "#5d5d5d",
          accentColor: "#ed145b",
          textColor: "#d9d9d9",
          background: "#171a1b",
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
