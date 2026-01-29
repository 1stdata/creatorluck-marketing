import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ff0000",
          black: "#000000",
          white: "#ffffff",
          gray: "#666666",
          "gray-light": "#f5f5f5",
          "gray-border": "#e0e0e0",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument)", "Georgia", "serif"],
        mono: ["var(--font-space)", "monospace"],
      },
      borderWidth: {
        brutal: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
