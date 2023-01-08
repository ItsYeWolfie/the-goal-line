module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['tailwindcss', 'html'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'class-methods-use-this': 0,
	},
};
