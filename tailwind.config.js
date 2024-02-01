/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      inter: ['inter', 'sans-serif'] // - remove default, put new
    },
    extend: {
      colors: {
        primary: '#1E54F5',
        secondary: '#091740',
        'green-dark': '#007E46',
        'green-light': 'rgb(226, 240, 236)',
        'gray-sidebar': 'rgb(246, 248, 250)',
        'gray-dark': '#E2E8EB'
      }
    }
  },
  plugins: []
}
