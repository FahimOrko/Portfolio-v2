/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cosmic-cyan": "linear-gradient(to right, #00C9A7, #005F73)",

        // "pp-img": "url('./PersonalPhoto.png')",
        "pp-img": "url('./PersonalPhoto.jpg')",
        "hero-img": "url('./HeroBg.jpg')",

        "midnight-dusk-only": "url('./assets/midnightDuskOnly.svg')",
        "midnight-dusk": "url('./assets/midnightDusk.svg')",
        "midnight-dusk-mask": "url('./assets/midnightDuskMask.svg')",
        "midnight-dusk-fliped": "url('./assets/midnightDuskFliped.svg')",
        "midnight-dusk-mask-fliped":
          "url('./assets/midnightDuskFlipedMask.svg')",

        // projects
        "movie-reviews": "url('/Projects/MovieReviews.svg')",
        "resturant-io": "url('/Projects/ResturantIO.svg')",
        "coming-soon": "url('/Projects/ComingSoon.svg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        "cosmic-cyan-hover": "#66E5D0",
        "cosmic-cyan-start": "#00C9A7",
        "cosmic-cyan-via": "#048E90",
        "cosmic-cyan-end": "#005F73",
        "card-bg-light": "#3341554D",
        "card-bg-dark": "#15182A",
      },
    },
  },
  plugins: [],
};
