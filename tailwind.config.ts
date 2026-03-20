import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        moss: "#1E2D25",
        accent: "#CC5833",
        cream: "#F2F0E9",
        charcoal: "#1A1A1A",
        "off-white": "#E8E4DA",
        "warm-white": "#F9F7F2",
        "border-subtle": "#D4CFC5",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        drama: ["var(--font-cormorant)", "serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        "2xl": "1.5rem",
        "3xl": "2.0rem",
        "4xl": "2.5rem",
      },
      keyframes: {
        scan: {
          "0%, 100%": { top: "0%" },
          "50%": { top: "98%" },
        },
        ekg: {
          "0%": { strokeDashoffset: "350" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        scan: "scan 3s ease-in-out infinite",
        ekg: "ekg 2s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
