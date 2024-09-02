const lighten = (clr, val) => `hsl(from var(${clr}) h s calc(l + ${val}))`
const darken = (clr, val) => `hsl(from var(${clr}) h s calc(l - ${val}))`
const primaryColor = '--primary-color'
const secondaryColor = '--secondary-color'

const colorTone = color => {
  return {
    DEFAULT: lighten(color, 0),
    50: lighten(color, 45),
    100: lighten(color, 40),
    150: lighten(color, 35),
    200: lighten(color, 30),
    300: lighten(color, 20),
    400: lighten(color, 10),
    500: lighten(color, 0),
    600: darken(color, 10),
    700: darken(color, 20),
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: colorTone(primaryColor),
        secondary: colorTone(secondaryColor),
        red: '#ef4444',
        'pet-primary': '#003459',
        'pet-primary-light': '#00528C',
        'pet-primary-lightest': '#0078CD',
        'pet-secondary': '#F7DBA7',
        'pet-secondary-dark': '#EEC77E',
        'pet-secondary-light': '#FCEED5',
      },
      boxShadow: {
        'pet-card': '0 4px 28px rgba(0, 0, 0, 0.05)',
      },
    },

    // fontFamily: {
    //   sans: ['Montserrat'],
    //   serif: ['Montserrat'],
    //   mono: ['Montserrat'],
    //   display: ['Montserrat'],
    //   body: ['Montserrat']
    // }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
