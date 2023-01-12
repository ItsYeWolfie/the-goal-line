module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'plugin:@typescript-eslint/recommended',
		'airbnb-typescript/base',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['tailwindcss', 'html', '@typescript-eslint'],
	overrides: [
		{
			files: ['*.types.ts'],
			rules: {
				'import/no-cycle': 0,
			},
		},
	],
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
	},
	rules: {
		'class-methods-use-this': 0,
		"import/no-extraneous-dependencies": 0,
		"import/extensions": 0,
	},
};
