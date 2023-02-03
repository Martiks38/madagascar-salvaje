module.exports = {
	extends: ['standard', 'plugin:astro/recommended', 'plugin:@typescript-eslint/recommended'],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'space-before-function-paren': 'off',
		'no-mixed-spaces-and-tabs': 'off'
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {}
		}
	]
}
