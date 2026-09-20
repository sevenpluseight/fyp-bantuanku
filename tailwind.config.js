/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0352CE",
                    dark: "#032F81",
                    light: "#0878EA",
                },

                accent: {
                    red: "#F5222D",
                    orange: "#FD9E12",
                    yellow: "#FFC21C",
                },

                background: "#FFFFFF",
                surface: "#F7F8FA",

                foreground: "#1E1E2E",
                "muted-foreground": "#626775",

                border: "#E2E5EA",
            },
        },
    },
    plugins: [],
};
