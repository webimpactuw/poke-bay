/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12748f',
        secondary: '#97C7DC',
        white: '#fffdf8',
      },
      fontFamily: {
        lato: ['Lato'],
        oswald: ['Oswald'],
        inter: ['Inter', 'sans-serif'],
        league: ['League Spartan', 'Spartan', 'sans-serif'],
      },
      fontSize: {
        nav: ['16px'],
      },
    },
  },
  plugins: [],
};
