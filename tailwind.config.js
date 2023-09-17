/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      inter: ["Inter", "sans-serif"], // Stolen from Padlet 😭
      mono: ["JetBrains Mono", "monospace"]
    }
  },
  plugins: [],
}

