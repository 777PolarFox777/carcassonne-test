module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    node: true,
    jest: true,
  },
  rules: {
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
  },
  overrides: [
    {
      files: ['drizzle.config.ts'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
    {
      files: ['jest.config.cjs'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
        sourceType: 'script',
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
};
