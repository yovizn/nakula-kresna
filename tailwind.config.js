/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        chillax: ["Chillax", "sans-serif"],
        switzer: ["Switzer", "sans-serif"],
        clashDisplay: ["Clash Display", "sans-serif"],
      },
      colors: {
        dark: "#121113",
        secondary: "#222725",
        primary: "#899878",
        complement: "#877898",
        sub: "#788998",
        light: "#e4e6c3",
        bright: "#f7f7f2",
        whiteness: "#f3f3f3",
      },
    },
  },
  plugins: [],
};
