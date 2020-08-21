module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    'no-return-await': 0,
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    '@typescript-eslint/camelcase': 0,
  },
}
