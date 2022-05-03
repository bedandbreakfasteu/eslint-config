# eslint-config

The ESLint configuration for Bedandbreakfast.eu

## Usage

1. Setup your project to use `@bedandbreakfasteu/prettier-config` by [following this README](https://github.com/bedandbreakfasteu/prettier-config#readme).

2. Make sure `@bedandbreakfasteu/eslint-config` is available in your project.

3. Add an `.eslintrc.js` file at the root of your project that extends this config:

    ```js
    module.exports = {
        extends: '@bedandbreakfasteu/eslint-config',
    };
    ```

4. Install the required dependencies into your project using:

    ```bash
    (
      export PKG=@bedandbreakfasteu/eslint-config;
      npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev
    )
    ```

    This copies the peerDependencies of this project as devDependencies into yours.

    On Windows this should work using [Git for Windows](https://gitforwindows.org/).

5. To run ESLint as a pre-commit hook and automatically fix issues add [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) using:

    ```bash
    npm install husky lint-staged --save-dev
    ```

    Then copy the following to your `package.json`:

    ```json
     "husky": {
       "hooks": {
         "pre-commit": "lint-staged"
       }
     },
     "lint-staged": {
       "*.{js,jsx,ts,tsx}": [
         "eslint --fix",
         "git add"
       ]
     }
    ```

    That's it, happy coding!
