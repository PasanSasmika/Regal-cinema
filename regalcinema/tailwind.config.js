/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Lato', 'sans-serif'],
        
      },
      colors:{
        green:"#a10707",
        orange:"#F7921E",
      },
      boxShadow:{
        'xl':'0px 10px 60px 0px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [],
}

