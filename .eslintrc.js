module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    jest: true, // now **/*.test.js files' env has both es6 *and* jest
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
  },
};
