/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
   
    extend: {
      boxShadow: {
        'inset-custom': 'inset 0 0 0 8px hsla(0, 1%, 72%, 0.3)', // Custom shadow
      },
      animation: {
        profile__animate: "profile__animate 10s ease-in-out infinite", // Adjusted duration and removed unused delay
      },
      keyframes: {
        profile__animate: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
