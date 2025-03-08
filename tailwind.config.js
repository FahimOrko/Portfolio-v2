/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./Herobg.jpg')",
        "about-img": "url('./Aboutbg.jpg')",
        "skills-img": "url('./Skillsbg.jpg')",
        "pp-img": "url('./PersonalPhoto.png')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
