/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#1C1C27",
        bgLight: "#1C1E27",
        primary: "#854CE6",
        text_primary: "#F2F3F4",
        text_secondary: "#b1b2b3",
        card: "#171721",
        card_light: "#191924",
        button: "#854CE6",
        button2: "#D900FF",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero-bg': "url('/src/assets/img/bg-hero.svg')",
      }
    },
  },
  plugins: [],
};
