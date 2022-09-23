/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: 'rgb(6,6,6)',
        'dark-nav': 'rgb(15,15,15)',
        'dark-primary': 'rgba(255, 255, 255, 0.85)',
        'dark-secondary': 'rgba(247, 248, 248, 0.6)',
      },
    },
  },
};
