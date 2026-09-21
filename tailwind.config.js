/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}",], presets: [require("nativewind/preset")], theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0352CE", dark: "#032F81", light: "#0878EA",
                },

                secondary: "#F7F8FA",

                accent: {
                    red: "#F5222D", orange: "#FD9E12", yellow: "#FFC21C",
                },

                background: "#FFFFFF", surface: "#F7F8FA",

                foreground: "#1E1E2E", "muted-foreground": "#626775",

                border: "#E2E5EA",

                info: {
                    DEFAULT: "#0352CE", foreground: "#032F81", background: "#EFF6FF",
                },

                success: {
                    DEFAULT: "#16A34A", foreground: "#166534", background: "#F0FDF4",
                },

                warning: {
                    DEFAULT: "#FD9E12", foreground: "#78350F", background: "#FFF7ED",
                },

                error: {
                    DEFAULT: "#F5222D", foreground: "#991B1B", background: "#FEF2F2",
                },
            },
        },
    }, plugins: [],
};
