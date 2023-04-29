/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'gold': '#D6AD60',
      "tan":"#B68D40",
      "orange":"#E76D57",
      // "whitney":"#f9d6c2",
      "whitney":"#f0f8ff",
      "dark":"#201315",
      "grey":"#666666",
      "alice":"#F4EBD0",
      "pinku":"#ff1493",
      "bluu":"#1C1CF0"
      
    }
  ,
  fontFamily:{
    "sirenia":["sirenia","sans-serif","arial"],
    "verdana":["verdana","sans-serif","arial"],
    "mont":["mont","sans-serif","arial"],
  },
  backgroundImage: {
    'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  }
  }
    ,
  },
  plugins: [],
}
