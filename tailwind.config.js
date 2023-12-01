/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#053B50",
        secondary: "#176B87",
        third: "#64CCC5",
        fourth: "#EEEEEE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
