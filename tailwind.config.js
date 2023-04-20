/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
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
        "brand-white": "#f4f6fb",
      },
    },
  },
  plugins: [],
};
