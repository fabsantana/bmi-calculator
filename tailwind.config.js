/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './starter-code/*.{html,js}'
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "var(--primary-blue)",
        "primary-gunmetal": "var(--primary-gunmetal)",
        "primary-grey-blue": "var(--primary-grey-blue)",
        "secondary-grey": "var(--secondary-grey)",
        "pure-white": "var(--pure-white)"
        
      }
    },
  },
  plugins: [],
}

