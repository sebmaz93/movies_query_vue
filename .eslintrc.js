module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    sourceType: 'module',
    extraFileExtensions: ['.vue', '.d.ts', '.spec.ts'],
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'no-undef': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'prettier/prettier': ['off', { singleQuote: true }],
    'no-undef': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  plugins: ['prettier'],
};
