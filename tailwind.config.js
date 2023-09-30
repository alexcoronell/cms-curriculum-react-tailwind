/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'background-dark': '#23272f',
      'background-light': '#343a46',
      'background': '#252f44',
      'primary': '#1f3239',
      'black': '#000',
      'white': '#FFF',
      'facebook': '#3b5998',
      'twitter': '1da1f2',
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
}


