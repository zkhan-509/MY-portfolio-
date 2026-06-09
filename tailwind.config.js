/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        dm:   ["'DM Sans'", "sans-serif"],
      },
      colors: {
        bg:      "#0a0a0f",
        surface: "#13131a",
        bdark:   "#1e1e2e",
        accent:  "#5b8fff",
        accent2: "#7c3aed",
        ggreen:  "#22d3a5",
        muted:   "#8888aa",
      },
    },
  },
  plugins: [],
}
