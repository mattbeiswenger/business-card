module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
}
