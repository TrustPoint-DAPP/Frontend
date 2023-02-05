/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#333333",
        primary: "#05d494",
        secondary: "#27d5e4",
        front: "#ffffff",
        back: "#000000",
      },
      transitionDuration: {
        800: "800ms",
        inherit: "inherit"
      },
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      borderRadius: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};
