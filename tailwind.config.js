/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          primary: '#f37dca',
          secondary: "#ab8bff",
          light: {
            100: "#3388ff",
            200: "#3dccad",
            300: "#9dca33"
          },
          dark: {
            100: "#345355",
            200: "#a93887",
            300: "#a12212"
          },
          accent: "#4fddca"
      }
    },
  },
  plugins: [],
}