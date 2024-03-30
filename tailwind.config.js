/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Roboto Flex','sans-serif']
      },
      boxShadow: {
        custom:'-16px 8px 14px 0px rgba(225,225,225,0.5)',
        custom2:'0px 0px 4px 1px rgba(225,225,225,0.5)',
        custom3: '0px 2px 3px 0px rgba(225,225,225,0.5)',
      },
      gridTemplateRows:{
        custom: 'auto auto'
      },
      gridTemplateColumns:{
        custom: '20% 30% 50%'
      },
      zIndex: {
        '1': 1,
        '3': 3,
      },
    },
  },
  plugins: [],
}