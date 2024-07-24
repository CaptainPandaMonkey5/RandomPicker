/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "night", "dim"],
  },
  plugins: [
    "prettier-plugin-css-order",
    "prettier-plugin-tailwindcss",
    require("daisyui"),
  ],
};
