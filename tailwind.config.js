/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'righteous': ['Righteous'],
                'condensed': ['Roboto Condensed'],
                'grotesk'  : ['Space Grotesk'],
            },
            colors: {
                'cinza': {
                    '800': '#202124'
                }
            },
        },
    },
    plugins: [],
}

