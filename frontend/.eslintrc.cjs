/* eslint-disable @typescript-eslint/naming-convention */

module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "xo",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": ["*.ts", "*.tsx"],
        },
        "import/resolver": {
            typescript: {
                project: __dirname,
            },
        },
    },

    plugins: ["react", "autofix", "prettier"],
    rules: {
        "prettier/prettier": "error",
        quotes: ["error", "double", { avoidEscape: true }],
        "no-negated-condition": "off",
    },
    overrides: [
        {
            extends: ["xo-typescript"],
            files: ["*.ts", "*.tsx", "*.cjs", "*.mjs"],
            rules: {
                "react/react-in-jsx-scope": "off",
                "react/self-closing-comp": [
                    "error",
                    {
                        component: true,
                        html: true,
                    },
                ],
                "autofix/no-unused-vars": [
                    "error",
                    {
                        argsIgnorePattern: "^_",
                        ignoreRestSiblings: true,
                        destructuredArrayIgnorePattern: "^_",
                    },
                ],
                "import/order": [
                    "error",
                    {
                        groups: [
                            "builtin",
                            "external",
                            "internal",
                            "parent",
                            "sibling",
                            "index",
                            "object",
                            "type",
                        ],
                        pathGroups: [
                            {
                                pattern: "@/**/**",
                                group: "parent",
                                position: "before",
                            },
                        ],
                        alphabetize: {
                            order: "asc",
                        },
                    },
                ],
                "no-restricted-imports": [
                    "error",
                    {
                        patterns: ["../"],
                    },
                ],
                "@typescript-eslint/naming-convention": [
                    "warn",
                    {
                        selector: "default",
                        format: ["camelCase"],
                        leadingUnderscore: "allow",
                        trailingUnderscore: "allow",
                    },
                    {
                        selector: "variable",
                        format: ["camelCase", "UPPER_CASE", "PascalCase"],
                        leadingUnderscore: "allow",
                        trailingUnderscore: "allow",
                    },
                    {
                        selector: "typeLike",
                        format: ["PascalCase"],
                    },
                ],
                "@typescript-eslint/consistent-type-definitions": [
                    "error",
                    "interface",
                ],
                "@typescript-eslint/indent": "off",
                "@typescript-eslint/quotes": ["error", "double"],
                "@typescript-eslint/object-curly-spacing": ["error", "always"],
                "@typescript-eslint/no-empty-interface": "off",
                "@typescript-eslint/comma-dangle": "off",
                "@typescript-eslint/prefer-nullish-coalescing": "off",
                "@typescript-eslint/ban-types": "off",
                "capitalized-comments": "off",
                "linebreak-style": ["error", "unix"],
                "jsx-quotes": "off",
                "arrow-parens": "off",
                "operator-linebreak": "off",
                "object-shorthand": "off",
                "react/prop-types": "off",
            },
        },
    ],
};
// Using eslint-plugin-i, a fork of eslint-plugin-import as a stand-in for eslint-plugin-import because eslint-plugin-i is supposed to be faster. Read the README to know more: https://github.com/un-es/eslint-plugin-i
