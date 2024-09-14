/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#3D099B",
        bgBackground:  "rgb(0, 123, 255)",
        colorButton: "#E1DDDB",
        navColor: "#72FFFF"
      },
    },
  },
  plugins: [],
}
