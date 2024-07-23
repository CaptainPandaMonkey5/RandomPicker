/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss",
    "tailwind-hamburgers",
  ],
};
