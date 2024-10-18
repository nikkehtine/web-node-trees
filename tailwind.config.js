const defaultTheme = require("tailwindcss/defaultTheme")
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Mono"', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        map: {
          DEFAULT: "hsl(var(--map))",
          foreground: "hsl(var(--map-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        tokyo: {
          red: "hsl(var(--tokyo-red))",
          orange: "hsl(var(--tokyo-orange))",
          yellow: "hsl(var(--tokyo-yellow))",
          green: "hsl(var(--tokyo-green))",
          aqua: "hsl(var(--tokyo-aqua))",
          cyan: "hsl(var(--tokyo-cyan))",
          sky: "hsl(var(--tokyo-sky))",
          blue: "hsl(var(--tokyo-blue))",
          purple: "hsl(var(--tokyo-purple))",
          "bright-yellow": "hsl(var(--tokyo-bright-yellow))",
          "bright-aqua": "hsl(var(--tokyo-bright-aqua))",
          1: "hsl(var(--tokyo-1))",
          2: "hsl(var(--tokyo-2))",
          3: "hsl(var(--tokyo-3))",
          4: "hsl(var(--tokyo-4))",
          5: "hsl(var(--tokyo-5))",
          6: "hsl(var(--tokyo-6))",
          7: "hsl(var(--tokyo-7))",
          8: "hsl(var(--tokyo-8))",
          9: "hsl(var(--tokyo-9))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
