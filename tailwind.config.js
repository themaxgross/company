/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      colors: {
        "brand-primary": {
          DEFAULT: "#0E1C38",
          50: "#FAFBFE",
          100: "#E5ECF9",
          200: "#BDCDEE",
          300: "#94AFE4",
          400: "#6B90DA",
          500: "#4271D0",
          600: "#2D59B2",
          700: "#22458A",
          800: "#183061",
          900: "#0E1C38",
          950: "#091224",
        },
      },
    },
  },
  plugins: [],
};
