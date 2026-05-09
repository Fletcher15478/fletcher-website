import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#06080d",
          elevated: "#0c1018",
          subtle: "#111827",
        },
        edge: "rgba(255,255,255,0.08)",
        ink: {
          DEFAULT: "#e5e7eb",
          muted: "#9ca3af",
          faint: "#6b7280",
        },
        accent: {
          DEFAULT: "#6366f1",
          dim: "#4f46e5",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 80px rgba(0,0,0,0.45)",
        glow: "0 0 80px rgba(99,102,241,0.15)",
      },
      backgroundImage: {
        "grid-fine":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99,102,241,0.22), transparent 55%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
