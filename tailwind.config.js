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
        white: "#F5FBEE",
        green: "#899878",
        darkGreen: "#42493A",
        lightGreen: "#A6AE9C",
        blackGreen: "#121113",
        blue: "#659BA6",
        darkBlue: "#306872",
      },
      boxShadow: {
        sm: "shadow-[0px_2px_4px_0px_#1D2A10]",
        lg: "shadow-[0px_8px_20px_0px_#1D2A10]",
        "inset-sm": "shadow-[inset_0px_2px_4px_0px_#1D2A10]",
        "inset-lg": "shadow-[inset_0px_8px_12px_1px_#1D2A10]",
      },
    },
  },
  plugins: [],
};
