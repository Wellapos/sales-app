module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  },
  ignorePatterns: ['node_modules/', 'coverage/', 'build/', 'dist/'],
};
