import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light palette
        canvas: "#ccab78",
        ink: "#292225",
        primary: "#7a2d30",
        secondary: "#81a867",
        neutral: "#8f897b",
        muted: "#b3b09f",
        paper: "#efe3cf",
        // dark palette
        "dark-bg": "#0d0d0d",
        "dark-surface": "#161616",
        "dark-text": "#f0ece4",
        "dark-accent": "#c9a96e",
        "dark-border": "#2a2a2a",
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
