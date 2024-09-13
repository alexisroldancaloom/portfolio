/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0DDDA", // Color primario
        secondary: "#FF5943", // Color secundario
        dark: "#454545", // Color oscuro
      },
      fontFamily: {
        sans: ["Karla", "sans-serif"], // Añade la fuente Karla
      },
      fontSize: {
        normal: "clamp(14px, 2vw, 20px)", // Tamaño de fuente responsivo usando clamp
        medium: "clamp(16px, 2.5vw, 22px)", // Tamaño de fuente mediana responsivo
        large: "clamp(18px, 3vw, 26px)", // Tamaño de fuente grande responsivo
      },
    },
  },
  plugins: [],
};
