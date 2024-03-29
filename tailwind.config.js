/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: { 192: "48rem" },
      minHeight: { "1/2": "50%", "1/4": "25%" },
    },
  },
  plugins: [],
};
