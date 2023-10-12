/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'background-light': '#343a46',
      'background': '#252f44',
      'primary': '#61dbfb',
      'dark': '#23272f',
      'black': '#000000',
      'white': '#FFFFFF',
      'red': 'FF0000',
      'facebook': '#3b5998',
      'twitter': '#1da1f2',
      'github': '#71717a',
      'gitlab': '#fca326',
      'linkedin': '#0077b5'
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


