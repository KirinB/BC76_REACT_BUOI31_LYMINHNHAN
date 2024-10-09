/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "",
        md: "",
        lg: "1320px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
    },
  },
  plugins: [],
};
