import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",      // <-- Adicione isso
    "./src/components/**/*.{js,ts,jsx,tsx}", // <-- e isso
    "./src/pages/**/*.{js,ts,jsx,tsx}",      // <-- e isso também
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ff88",
        secondary: "#011a13",
        darkBg: "#0a0a0a",
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 20px #00ff8844",
      },
    },
  },
  plugins: [],
};

export default config;
