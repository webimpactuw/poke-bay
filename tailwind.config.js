/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#35728C',
        secondary: '#97C7DC',
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
