/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#222222",
        columnBackgroundColor: "#141414",
      },
    },
  },
  plugins: [],
};
