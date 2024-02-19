/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["dracula"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
