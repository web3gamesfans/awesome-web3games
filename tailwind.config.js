const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                lg: '30rem',
                xl:'34rem',
                big:'44rem',
            },

        },
        variants: {
            extend: {},
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ],
}
