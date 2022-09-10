/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      colors: {
        "namno-orange": "#FF9E2D",
        "namno-light-orange": "#FFB661",
        "namno-dark-orange": "#FF8900",
        "namno-blue": "#1C3879",
        "namno-dark-blue": "#03194B",
        "light-white": "rgba(255,255,255,0.18)",
        "namno-font": "#F9F5EB",
      },
    },
  },
  plugins: [],
};
