const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', 'Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [forms],
	darkMode: 'class',
};
