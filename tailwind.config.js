/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#f9f9f9',
        'bg-light': '#f9f9f9',
        'card-dark': '#f9f9f9',
        'card-light': '#f9f9f9',
        'text-dark': '#f9f9f9',
        'text-light': '#f9f9f9',
        'text-open': '#f9f9f9',
        'btn-dark': '#f9f9f9',
        'btn-light': '#f9f9f9',

      },
    },
  },
  plugins: [],
}

