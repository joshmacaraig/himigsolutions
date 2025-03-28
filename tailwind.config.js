/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F766E",
        secondary: "#D4A017",
        accent: "#F43F5E",
        neutral: {
          light: "#F8FAFC",
          DEFAULT: "#E2E8F0",
          dark: "#1E293B",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
        display: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
}