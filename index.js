module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx'],
    'import/resolver': { typescript: true },
  },
  plugins: ['@typescript-eslint', 'only-warn'],
  extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    //
    // Imports
    //
    'import/extensions': [1, { ts: 'never' }],
    'import/order': [1, { 'newlines-between': 'always' }],
    'import/no-unused-modules': [1, { unusedExports: true }],
    'import/no-useless-path-segments': 1,

    'import/prefer-default-export': 0,

    //
    // @typescript-eslint overrides
    //
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/no-useless-constructor': 1,
    '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],

    'no-shadow': 0,
    'no-useless-constructor': 0,
    'no-unused-vars': 0,

    //
    // General
    //
    'prefer-arrow-callback': [1, { allowNamedFunctions: true }],
    'prefer-object-spread': 0,
    'no-param-reassign': 0,
    'max-classes-per-file': 0,
  },
}
