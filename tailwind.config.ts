import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        '60': '0.60',
        '65': '0.65',
        '70': '0.70',
        '75': '0.75',
        '80': '0.80',
        '85': '0.85',
        '90': '0.90',
        '95': '0.95',
        '98': '0.98',
      },
      colors: {
        botanical: {
          bg: "#FAFCF8",
          tint: "#F0F5ED",
          surface: "#FFFFFF",
          border: "#E2E8DF",
          borderDark: "#C5D1C1",
        },
        forest: {
          950: "#0B150D",
          900: "#111E13", // Headings maximum contrast
          800: "#1E2F20", // Body copy
          700: "#2B402E",
          600: "#3D5841",
          500: "#507255",
          400: "#709675",
          300: "#A3C2A7",
          200: "#CDE0D0",
          100: "#E8F2E9",
          50: "#F4F8F4",
        },
        emeraldAccent: {
          DEFAULT: "#2D7A47",
          hover: "#225F37",
          highlight: "#3EA55E",
          light: "#E6F3E4",
          lightHover: "#D9ECDA",
        },
      },
      boxShadow: {
        card: "0 8px 30px -8px rgba(23, 38, 25, 0.08)",
        cardHover: "0 14px 40px -10px rgba(23, 38, 25, 0.14)",
        glass: "0 20px 40px -15px rgba(17, 30, 19, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
