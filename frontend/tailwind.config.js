/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [require("daisyui"), require("@tailwindcss/line-clamp")],
};
