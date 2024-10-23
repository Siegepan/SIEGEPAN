/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#8644F0',
      bg: '#FCFCFC',
      tBlue: '#51ACD9',
      tPink: '#E43B64'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {

    },
  },
  plugins: [],
}