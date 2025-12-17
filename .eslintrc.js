module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    wp: 'readonly',
    fontsampler: 'readonly',
    define: 'readonly',
    require: 'readonly',
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'warn',
    'no-var': 'warn',
  },
  ignorePatterns: [
    'vendor/**',
    'node_modules/**',
    'r.js',
    'js/fontsampler.js',
    'admin/js/fontsampler-admin.js',
  ],
};
