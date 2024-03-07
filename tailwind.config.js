/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#212121",
        "secondary-dark": "#171717",
      },
    },
  },
  plugins: [],
};
