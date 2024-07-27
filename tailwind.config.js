/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)',
        'custom-gradient-form': 'linear-gradient(#fce3fe, #fce3fe 60%)',
      },
      boxShadow: {
        'custom-box-shadow': '0 1px 3px -2px black',
      },
      colors: {
        'custom-color-menu': '#626262',
        'custom-color-h2': '#090909',
      },
      borderColor: {
        'custom-border-color': '#FF4141',
        'custom-border-color-button': '#7a7a7a',
      },
  },
  plugins: [],
}
}