/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        brandPrimary: "#4CAF4F",
        brandSecondary: "#263238",
        neutralDGray: "#4D4D4D",
        neutralLGray: "#89939E",
        neutralGray: "#717171",
        gray: "#D9DBE1",
        neutralBlack: "#263238",
        neutralSilver: "#F5F7FA",
        tintT5: "#E8F5E9",
        shadeS5: "#103E13"
      },
    },
  },
  plugins: [],
}