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
        brand: {
          primary:  "#0F172A",
          accent:   "#2563EB",
          cyan:     "#06B6D4",
          light:    "#F0F6FF",
          surface:  "#FFFFFF",
          border:   "#E2E8F0",
          muted:    "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)",
        "card-hover": "0 10px 30px -5px rgb(0 0 0 / 0.12)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0F172A 0%, #1E3A5F 60%, #0C1A36 100%)",
        "accent-gradient": "linear-gradient(135deg, #2563EB, #06B6D4)",
      },
    },
  },
  plugins: [],
};

export default config;
