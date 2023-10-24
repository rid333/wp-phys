/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#D90404",         
          "secondary": "#027333",
          "accent": "#F2CD5C",
          "neutral": "#2a323c",
          "base-100": "#fff",
          "info": "#010035",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#D9042B",
        }
      }
    ],
  }
}

