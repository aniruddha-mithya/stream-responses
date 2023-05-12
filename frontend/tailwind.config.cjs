/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                sapphire: {
                    100: "#88aaee", // Extend existing theme for your site. To fully replace base theme, add the same stuff but in the theme object instead of theme.extend
                    // VS code extension "Tailwind CSS IntelliSense" detects this and gives you autocomplete too. So it is a very useful extension if using this template or tailwind in general.
                },
            },
        },
    },
    plugins: [],
};
