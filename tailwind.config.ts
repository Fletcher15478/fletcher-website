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
          DEFAULT: "#f4f6f9",
          elevated: "#ffffff",
          subtle: "#e8ecf2",
        },
        edge: "#d4dce6",
        ink: {
          DEFAULT: "#0f172a",
          muted: "#475569",
          faint: "#64748b",
        },
        brand: {
          DEFAULT: "#004785",
          dim: "#003566",
          light: "#e8f1fa",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.06)",
        header: "0 1px 0 rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
