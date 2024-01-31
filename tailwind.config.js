/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', 'sans- serif'",
        raleway: "'Raleway', 'sans- serif'",
        permanent : "'Permanent Marker', 'cursive'",
    }
    },
  },
  plugins: [require("daisyui")]
}