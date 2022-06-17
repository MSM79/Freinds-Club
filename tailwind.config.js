/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './ui/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    placeholderColor: (theme) => theme('colors'),
    placeholderColor: {
      primary: '#435486',
    },
    plugins: [],
  },
};
