module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'no-var': 'error',
    'brace-style': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'space-before-blocks': 'error',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@contexts/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@HOCs/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@hooks/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@http/query/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@containers/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@components/**,@material-ui/**,@mui/material/**}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@forms/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@store/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@utils/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@constants/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{@shared-styles/**,@styles}',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@tests/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@mocks/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@typings/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['@material-ui/**'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/*.test.js',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.js',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
