/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6dabe4",
          DEFAULT: "#1a73e8",
          dark: "#1558b0",
        },
        secondary: {
          light: "#ffd1a4",
          DEFAULT: "#ff9200",
          dark: "#cc7300",
        },
        accent: {
          light: "#ffeb99",
          DEFAULT: "#ffcc00",
          dark: "#cc9900",
        },
        background: {
          light: "#f4f4f9",
          DEFAULT: "#ffffff",
          dark: "#e5e5e5",
        },
        neutral: {
          light: "#8a8a8a",
          DEFAULT: "#333333",
          dark: "#1a1a1a",
        },
        button: {
          primary: "#1a73e8",
          secondary: "#ff9200",
          accent: "#ffcc00",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
