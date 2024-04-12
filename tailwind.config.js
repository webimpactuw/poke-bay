/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#12748f',
        secondary: '#97C7DC',
        white: '#FFFDF9', 
      },
      fontFamily: {
        lato: ['Lato'],
        oswald: ['Oswald'],
      },
      fontSize: {
        nav: ['16px'],
      },
    },
  },
  plugins: [],
};
