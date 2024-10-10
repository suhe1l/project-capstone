/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        teko: ['Teko', 'sans-serif'],
        tacOne: ['Tac One', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%' : { opacity: '1' },
        }, 
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out'
      }
    },
  },
  plugins: [],
}

