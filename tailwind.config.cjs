const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
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
