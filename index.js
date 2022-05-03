// eslint-disable-next-line @typescript-eslint/no-var-requires
var prettierConfig = require('@bedandbreakfasteu/prettier-config');

module.exports = {
    ignorePatterns: ['lib/**/*.js', 'dist/**/*.js', 'node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'prettier'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/errors',
        'plugin:import/typescrconstipt',
        'plugin:import/warnings',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        semi: [2, 'always'],
        curly: [2, 'all'],
        'prettier/prettier': [2, prettierConfig],
        'lines-between-class-members': [2, 'always', { exceptAfterSingleLine: true }],
        'class-methods-use-this': 0,
        'import/extensions': ['error', 'never'],
        'import/prefer-default-export': 0,
        'import/no-default-export': 2,
        'import/no-extraneous-dependencies': 0,
        'no-shadow': 0,
        '@typescript-eslint/no-unused-vars': [
            1,
            {
                vars: 'all',
                args: 'all',
                varsIgnorePattern: '^_',
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: 'detect',
        },
    },
    overrides: [
        {
            files: ['*.spec.{ts,tsx}', '*.spec.{js,jsx}'],
            rules: {
                'no-unused-expressions': 0,
            },
        },
        {
            files: ['*.tsx'],
            rules: {
                'react/prop-types': 0,
                'no-plusplus': 0,
            },
        },
        {
            files: ['*.{js,jsx}'],
            rules: {
                '@typescript-eslint/explicit-function-return-type': 0,
            },
        },
        {
            files: ['src/**/*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 0,
            },
        },
    ],
};
