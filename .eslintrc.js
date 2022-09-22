module.exports = {
	parser: "@typescript-eslint/parser", // Specifies ESLint parser
	extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
	plugins: ["@typescript-eslint", "prettier"],
	parserOptions: {
		ecmaVersion: 2019, // Allows parsing of modern ECMA features
		sourceType: "module", // Allows for the use of imports
	},
	rules: {
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"prettier/prettier": [
			"error",
			{
				printWidth: 140,
				semi: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: "all",
				singleQuote: false,
			},
		],
	},
	overrides: [
		
	],
};
