module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:tailwindcss/recommended',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['*.types.ts'],
			rules: {
				'import/no-cycle': 0,
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'tailwindcss', 'html', '@typescript-eslint', 'prettier', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: true,
			},
		],
		'import/no-named-as-default': 'off',
	},
};
