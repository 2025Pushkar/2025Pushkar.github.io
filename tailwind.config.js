/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#13161f",
        "secondary":"#00e5fe",
        "tertiary":"#cfd4e2",
        "fourth":"#ccd6f6",
        "fifth":"#8892b0"
      }
    },
    screens: {
      lg: { min:"2023px" },
      sm: { max:"1050px" },
    }
  },
  plugins: [],
};

