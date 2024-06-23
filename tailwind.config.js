/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        body: "var(--body)",
        textColor: "var(--textColor)",
        headingColor: "var(--headingColor)",
      },
      borderRadius: {
        inputBorderRadius: "var(--inputBorderRadius)",
      },
      // module: {

      // }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
