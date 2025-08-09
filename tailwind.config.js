/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ditto-purple': '#6B0EC7',
        'ditto-beige': '#F5F0E6',
        'ditto-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
} 