module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:tailwindcss/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['tailwindcss'],
  rules: {
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'never',
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '**/*.css',
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    '@typescript-eslint/no-non-null-assertion': 'error',
  },
  overrides: [
    {
      files: ['vite.config.ts', 'jest.config.cjs'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'import/no-default-export': 'off',
      },
    },
  ],
};
