/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      belle: ['Bellefair', 'serif'],
      barlow: ['Barlow', 'sans-serif'],
      'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
    },
    colors: {
      white: 'hsl(0,0%,100%)',
      blue: 'hsl(231,77%,90%)',
      navy: 'hsl(230,35%,7%)',
      nav: 'hsl(230, 35%, 7%)',
      transparent: 'transparent',
    },
  },
  plugins: [],
};
