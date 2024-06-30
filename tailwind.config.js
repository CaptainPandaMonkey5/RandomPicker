/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: ["prettier-plugin-css-order",
        "prettier-plugin-tailwindcss"],
  }