/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./popup/go-url-popup.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

