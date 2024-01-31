/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['inter', 'sans-serif'] // - remove default, put new
    },
    extend: {}
  },
  plugins: []
}
