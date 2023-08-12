/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "375px",
        "lg": "1440px",
      },
      colors: {
        clifford: '#da373d',
        "dark-cyan": "hsl(185, 75%, 39%)",
        "very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
        "dark-grayish-blue": "hsl(227, 10%, 46%)",
        "dark-gray": "hsl(0, 0%, 59%)",
        "line-gray": "hsl(0, 0%, 91%)"
      },
      fontFamily: {
        "Kumbh-Sans": ["Kumbh Sans", "sans-serif"]
      }
    }
  },
  plugins: [],
}