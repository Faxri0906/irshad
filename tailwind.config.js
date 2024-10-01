/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "8px",
        },
      },
      screens: {
        'sm': '576px',
        '2sm': '640px',  
        'md': '768px',  
        'lg': '992px',
        '2lg': '1024px',
        'xl': '1280px',
        '2xl': '1360px',
      },
    },
  },
  plugins: [],
};