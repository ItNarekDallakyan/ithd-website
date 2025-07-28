/** @type {import('tailwindcss').Config} */

let tailwindcss = require("tailwindcss");
let precss = require("precss");
let autoprefixer = require("autoprefixer");

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./UI/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "dark": "#212121",
            "silver": "#9D9D9D",
            "dove-grey": "#646464",
            "pink": "#f96f6f",
            "spring": "#f8f6f2",
            "orange": "#f9bf6f",
            "white": "#FFFFFF",
            "grey": "#edebe7",
            "blue": "#5FBCC0",
            "mercury": "#e5e5e5",
            "matisse": "#2258A0",
            "carrara": "#EDEBE7",
            "purple": "#B7C6F0",
            "purple-dark": "#4d5b81"
        },
        container: {
            padding: {
                DEFAULT: "1.25rem",
                lg: "3rem",
                xl: "4rem",
                "2xl": "5rem",
            },
        },
    },
    plugins: [
        tailwindcss,
        precss,
        autoprefixer
    ]
}

