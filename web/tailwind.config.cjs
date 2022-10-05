/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,jsx}",
    "./index.html",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "backgroundImg": "url('/assets/background-stars.png')",
        "duo-gradient-original": "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)",
        "duo-gradient": "linear-gradient(90deg, #9572FC 30%, #43E7AD 40%, #E1D55D 30%)",
        "game-thumbnail-gradient": "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
    },
  },
  plugins: [],
}
