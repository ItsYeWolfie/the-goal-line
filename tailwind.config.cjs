const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require('flowbite/plugin');
const forms = require('@tailwindcss/forms');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./node_modules/flowbite/**/*.js', './src/**/*.{html,js,ts,jsx,tsx}'],
	darkMode: 'class',
	plugins: [forms, flowbite],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
		},
	},
};
