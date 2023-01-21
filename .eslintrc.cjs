module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'plugin:lit/recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['tailwindcss', 'html'],
	overrides: [],
	rules: {
		'class-methods-use-this': 0,
		'import/no-extraneous-dependencies': 0,
		'import/extensions': 0,
	},
};
