/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-emphasis': 'rgba(var(--bs-emphasis-color-rgb), 0.05)',
        'custom-blue': '#005eb8',
        primaryColor : '#007bff'
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

