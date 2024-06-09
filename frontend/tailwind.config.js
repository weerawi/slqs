/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'custom-poppin': ['Custom Font', 'Poppins'],
        'custom-kode': ['Custom Font', 'Kode Mono'],
        'custom-robot': ['Custom Font', 'Roboto Mono'],
      },
    },
  },
  plugins: [],
}
