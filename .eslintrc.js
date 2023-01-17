const { rules } = require('./config/eslint-rules');

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  ignorePatterns: [
    "node_modules/**",
    "config/**",
    ".eslintrc.js",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
    'react'
  ],
  rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
};
