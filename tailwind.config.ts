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
        moss: "#18261F",
        "moss-deep": "#0E1511",
        accent: "#CC5833",
        "accent-glow": "#E56B43",
        cream: "#F4F1EA",
        charcoal: "#141413",
        obsidian: "#0B0E0C",
        "off-white": "#EAE6DD",
        "warm-white": "#FAF8F5",
        "border-subtle": "#DED9CE",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "bento": "0 1px 2px rgba(26,26,26,0.04), 0 8px 24px -4px rgba(26,26,26,0.06), 0 24px 48px -12px rgba(30,45,37,0.06)",
        "bento-hover": "0 2px 4px rgba(26,26,26,0.05), 0 16px 36px -6px rgba(204,88,51,0.12), 0 32px 64px -16px rgba(30,45,37,0.14)",
        "obsidian": "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 24px 48px -12px rgba(0,0,0,0.65), 0 48px 96px -24px rgba(0,0,0,0.8)",
        "accent-glow": "0 0 0 1px rgba(204,88,51,0.3), 0 12px 32px -4px rgba(204,88,51,0.4), 0 24px 64px -8px rgba(204,88,51,0.25)",
      },
      keyframes: {
        scan: {
          "0%, 100%": { top: "0%" },
          "50%": { top: "98%" },
        },
        ekg: {
          "0%": { strokeDashoffset: "400" },
          "100%": { strokeDashoffset: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.06)" },
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        scan: "scan 3.5s ease-in-out infinite",
        ekg: "ekg 2.8s linear infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3.5s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
