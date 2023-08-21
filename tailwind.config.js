/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sx: ["14px", { lineHeight: "24px", letterSpacing: "-.03em" }],
        sm: ["16px", { lineHeight: "28px", letterSpacing: "-.03em" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-.03em" }],
        xl: ["24px", { lineHeight: "36px", letterSpacing: "-.03em" }],
        "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-.032em" }],
        "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-.032em" }],
        "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-.032em" }],
        "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-.032em" }],
      },
      colors: {
        text: "#f5f5f5",
        background: "#050505",
        primary: "#4fbfbf",
        secondary: "#171717",
        accent: "#c6c6c6",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
