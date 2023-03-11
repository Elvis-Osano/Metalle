/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gold': '#daa520',
      "orange":"#ff7f50",
      "whitney":"#f9d6c2",
      "dark":"#151515"
      
    }}
    ,
  },
  plugins: [],
}
