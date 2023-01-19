const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [forms],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
