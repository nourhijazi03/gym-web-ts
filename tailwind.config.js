/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gray-20":"#f8f4eb",
        "gray-50":"#EFE6e6",
        "gray-100":"#DFCCCC",
        "gray-500":"#5e0000",
        "primary-100":"#FFE1E0",
        "primary-300":"#FFA6A3",
        "primary-500":"#FF6b66",
        "secondary-400":"#ffcd58",
        "secondary-500":"#FFC132",

      },
      fontFamily:{
        dmsans:["DM Sans","sans-serif"],
        montserrat:["Monteserrat","sans-serif"]
      },
      content:{
        evolvetext:"url('./Assets/EvolveText.png')",
        abstractwaves:"url('./Assets/AbstractWaves.png')",
        sparkles:"url('./Assets/Sparkles.png')",
        circles:"url('./Assets/Circles.png')",
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1080px",
    },
  },
  plugins: [],
}

