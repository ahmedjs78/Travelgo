/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'circular-bold': ['Circular-Std-Bold', 'sans-serif'],
          },
        },
      },
  plugins: [],
}

