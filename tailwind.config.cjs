/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1e1e1e',
				secondary: '#9403fc',
				green: '#154E05',
			},
		},
	},
	plugins: [],
};
