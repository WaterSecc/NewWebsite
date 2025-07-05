/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                waterseclight: '#5bb6e6',
                watersecblue: '#3384c6',
                watersecdark: '#0d4692',
                watersecgreen: '#288f37',
                watersecgray: '#5a5a5a',
                darkergray: '#464545',
            },
        },
    },
    plugins: [],
};
