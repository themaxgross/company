/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
      futura: ["Futura PT", "Futura", "sans-serif"],
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
          50: "#BDCDEE",
          100: "#94AFE4",
          200: "#4271D0",
          300: "#22458A",
          400: "#0E1C38",
          500: "#0C1830",
          600: "#0A1428",
          700: "#081020",
          800: "#060C17",
          900: "#04080F",
          950: "#03060B",
        },
        "brand-white": "#f4f6fb",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem",
        "10xl": "110rem",
      },
    },
  },
  plugins: [require("tailwindcss-opentype"), require("@tailwindcss/forms")],
};
