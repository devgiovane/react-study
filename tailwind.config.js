/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: [ 'Roboto', 'sans-serif' ]
            }
        },
        container: {
            center: true,
            padding: '10rem'
        }
    },
    plugins: [],
}

