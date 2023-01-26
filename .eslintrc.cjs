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
		'prettier',
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
		project: './tsconfig.json',
	},
	plugins: ['react', 'tailwindcss', 'html', '@typescript-eslint', 'import'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: true,
			},
		],
		'import/no-named-as-default': 'off',
		'prettier/prettier': [
			'error',
			{
				tabWidth: 2,
				useTabs: true,
				semi: true,
				singleQuote: true,
				plugins: ['prettier-plugin-organize-attributes', 'prettier-plugin-tailwindcss'],
				attributeGroups: ['$CODE_GUIDE'],
				singleAttributePerLine: true,
				trailingComma: 'all',
				printWidth: 120,
			},
		],
		'react/no-array-index-key': 'warn',
		'tailwindcss/migration-from-tailwind-2': 0,
	},
};
