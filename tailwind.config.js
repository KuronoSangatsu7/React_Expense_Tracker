/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tx,tsx}"],
  theme: {
    screens: {
      'xs' : '100px',
      'sm': '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px'
    },
    extend: {
    },
  },
  plugins: [],
};
