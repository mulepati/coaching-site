import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#ccab78",
        ink: "#292225",
        primary: "#7a2d30",
        secondary: "#81a867",
        neutral: "#8f897b",
        muted: "#b3b09f",
        paper: "#efe3cf",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(41, 34, 37, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
