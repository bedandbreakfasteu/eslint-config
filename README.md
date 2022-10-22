# @bedandbreakfasteu/eslint-config

The ESLint configuration for Bedandbreakfast.eu

## Usage

1. Install this package along with our [prettier-config](https://github.com/bedandbreakfasteu/prettier-config) using:

    ```bash
    yarn add --dev @bedandbreakfasteu/eslint-config@bedandbreakfasteu/eslint-config#2.0.2 @bedandbreakfasteu/prettier-config@bedandbreakfasteu/prettier-config#1.0.1
    ```

2. Install the required devDependencies using:

    ```bash
    curl -o - https://raw.githubusercontent.com/bedandbreakfasteu/eslint-config/main/package.json \
    | jq '{ "peerDependencies" }.peerDependencies' \
    | command sed 's/[\{\},]//g ; s/: /@/g' \
    | xargs yarn add --dev
    ```

3. Add an `.eslintrc.js` with the following and expand upon it with your own config:

    ```bash
    const path = require('path');

    module.exports = {
        extends: ['@bedandbreakfasteu/eslint-config'],
        settings: {
            'import/resolver': {
                [require.resolve('eslint-import-resolver-typescript')]: {
                    alwaysTryTypes: true,
                    project: path.resolve(__dirname, 'tsconfig.json'),
                },
            },
        },
    };
    ```

That's it, happy coding!
