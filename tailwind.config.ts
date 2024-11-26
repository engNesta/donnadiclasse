import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "italian-red": "#CE2B37",
        "italian-green": "#009246",
        "rich-black": "#2A2A2A",
        "soft-white": "#F8F8F8",
        "soft-gray": "#F1F0FB",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;