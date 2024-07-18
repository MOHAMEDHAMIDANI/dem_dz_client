/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    extend: {
      colors: {
        "mainBlue": "rgb(49,106,255)",
        // "mainBlue": "rgb(52,95,214)",
        "hoverBlue": "rgb(240,244,254)",
        "textHover": "rgb(142,173,255)",
        "textGrey": "rgb(170,178,190)",

      }
    },
  },
  plugins: [],
}

