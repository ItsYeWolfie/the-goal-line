const defaultTheme = require('tailwindcss/defaultTheme');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */

module.exports = {
	safelist: [
		'col-start-1',
		'col-start-2',
		'col-start-3',
		'col-start-4',
		'col-start-5',
		'col-start-6',
		'row-start-1',
		'row-start-2',
		'row-start-3',
		'row-start-4',
		'row-start-5',
		'row-start-6',
	],
	content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [forms],
};
