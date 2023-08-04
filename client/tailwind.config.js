/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          white: "#fff",
          black: "#000",
          forestgreen: "#43b14b",
          honeydew: "#cfffd9",
          "ajdan-black": "#2d2f30",
        },
        fontFamily: {
          alice: "Alice",
          "alfa-slab-one": "'Alfa Slab One'",
          inter: "Inter",
        },
        borderRadius: {
          "21xl": "40px",
          "4xl": "23px",
          xl: "20px",
        },
      },
      fontSize: {
        "9xl": "1.75rem",
        "22xl": "2.56rem",
        "13xl": "2rem",
        base: "1rem",
        "5xl": "1.5rem",
      },
    },
    corePlugins: {
      preflight: false,
    },
  };
  