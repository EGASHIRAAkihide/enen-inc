/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'telop': 'telop 20s linear infinite'
      },
      keyframes: {
        'telop': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-400%)' },
        }
      }
    },
  },
  plugins: [],
}