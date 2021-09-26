/* eslint-disable no-undef */
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		// Default eslint rules
		"eslint:recommended",

		// Default typescript rules
		"plugin:@typescript-eslint/recommended",

		// Default prettier rules
		// NB: To be added last. This will turn off eslint rules conflicting with prettier
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	rules: {
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-explicit-any": "error",
	},
};
