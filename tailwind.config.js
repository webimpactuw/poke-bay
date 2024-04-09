/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'lato': ['Lato'],
      'oswald': ['Oswald'],
    },
    fontSize: {
      nav: ['24px', '28.8px'],
    },
    extend: {
      colors: {
        primary: '#35728C',
        secondary: '#97C7DC',
      },
    },
  },
  plugins: [],
};
