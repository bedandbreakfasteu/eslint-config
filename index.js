// eslint-disable-next-line @typescript-eslint/no-var-requires
var prettierConfig = require('@bedandbreakfasteu/prettier-config');

module.exports = {
    ignorePatterns: ['lib/**/*.js', 'dist/**/*.js', 'node_modules'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'yaml', 'prettier'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:import/warnings',
        'plugin:yaml/recommended',
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
    },
};
