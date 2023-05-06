/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
          colors: {
      'lightred': '#fce6ec',
      'greenyes': '#47bc00',
      'greenhover': '#58e800',
      'corpored' : '#ee445b',
      // fce6ec
    },
    },
  },
  plugins: [],
}