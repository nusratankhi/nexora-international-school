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
        nexora: {
          navy: {
            DEFAULT: "#082D5C",
            dark: "#051C3B",
            deep: "#04142B",
            light: "#0E4080",
          },
          blue: {
            DEFAULT: "#0759C7",
            hover: "#0648A3",
            light: "#3B82F6",
            soft: "#EBF3FF",
          },
          gold: {
            DEFAULT: "#FFB800",
            hover: "#E6A600",
            light: "#FFF4D6",
            accent: "#FBBF24",
          },
          bg: {
            DEFAULT: "#F4F7FC",
            soft: "#F8FAFC",
            white: "#FFFFFF",
          },
          gray: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Poppins", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(8, 45, 92, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(8, 45, 92, 0.16)',
        'hero-stat': '0 10px 40px -5px rgba(8, 45, 92, 0.12)',
        'gold-glow': '0 4px 20px -2px rgba(255, 184, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;
