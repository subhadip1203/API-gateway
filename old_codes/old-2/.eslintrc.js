module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
        node: true
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    plugins: ['prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        'no-console': 'off'
    }
};
