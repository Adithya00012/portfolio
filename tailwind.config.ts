import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0E14", // deep charcoal-navy, not pure black
        "base-surface": "#12161F",
        "base-surface-2": "#1A1F2B",
        light: "#FAFAF9",
        "light-surface": "#F1F1EE",
        ink: {
          DEFAULT: "#E8EAED",
          muted: "#8B93A7",
          dim: "#5B6478"
        },
        accent: {
          mint: "#5EEAD4", // primary accent — evokes a terminal cursor
          amber: "#FBBF24" // secondary accent — used sparingly, like a syntax highlight
        }
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "40px 40px"
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" }
        }
      },
      animation: {
        blink: "blink 1s steps(1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
