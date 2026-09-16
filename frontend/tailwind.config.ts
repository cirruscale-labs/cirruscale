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
          primary:  "#EDEDED",
          accent:   "#60A5FA",
          cyan:     "#38BDF8",
          light:    "#111111",
          surface:  "#0A0A0A",
          border:   "#1E1E1E",
          muted:    "#9CA3AF",
          dark:     "#080a0f",
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
        "hero-gradient": "linear-gradient(135deg, #0A0A0A 0%, #0F1218 60%, #0A0A0A 100%)",
        "accent-gradient": "linear-gradient(135deg, #60A5FA, #38BDF8)",
      },
    },
  },
  plugins: [],
};

export default config;
