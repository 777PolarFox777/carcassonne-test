module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-default-export': 'error',
    'import/prefer-default-export': 'off',
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
