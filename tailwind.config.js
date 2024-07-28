/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class', 
  content: [
    "./index.html",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite/**/*.{js,ts}",
    './node_modules/preline/preline.js',
  ],
  plugins: [
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],

  theme: {
    extend: {
      colors: {
        "mainBlue": "rgb(49,106,255)",
        // "mainBlue": "rgb(52,95,214)",
        "hoverBlue": "rgb(240,244,254)",
        "textHover": "rgb(142,173,255)",
        "textGrey": "rgb(170,178,190)",

      },
      fontFamily: {
        'Lora': ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}

