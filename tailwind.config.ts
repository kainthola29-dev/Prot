import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#059669",
          dark: "#047857",
          light: "#D1FAE5",
          50: "#ECFDF5",
          100: "#D1FAE5",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          800: "#065F46",
        },
        accent: "#0D9488",
        dark: {
          bg: "#16181C",
          card: "#212428",
          section: "#1A1D21",
          border: "#2D3139",
          text: "#F9FAFB",
          muted: "#818894",
        },
        light: {
          bg: "#F3F4F6",
          card: "#FFFFFF",
          section: "#F9FAFB",
          border: "#E5E7EB",
          text: "#111827",
          muted: "#4B5563",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "sans-serif"],
        body: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        inbio: "0 8px 48px rgba(0, 0, 0, 0.08)",
        "inbio-hover": "0 20px 60px rgba(0, 0, 0, 0.16)",
        "inbio-dark": "0 8px 48px rgba(0, 0, 0, 0.35)",
        "inbio-dark-hover": "0 20px 60px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
