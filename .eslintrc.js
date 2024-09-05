module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    'react-native/react-native': true,
  },
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly', NodeJS: true },
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',

    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:import/typescript',

    //eslint not affect prettier - https://github.com/prettier/eslint-plugin-prettier/issues/103#issuecomment-425670176
    'plugin:prettier/recommended', // yarn add -D eslint-plugin-prettier eslint-config-prettier
  ],
  plugins: [
    'react',
    'react-native',
    '@typescript-eslint',
    'react-hooks',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    //NOTE: eslint-import-resolver-typescript eslint-plugin-import
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'], /////
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
        extensions: [
          '.ts',
          '.tsx',
          '.android.tsx',
          '.ios.tsx',
          '.js',
          '.android.js',
          '.ios.js',
          '.android.jsx',
          '.ios.jsx',
        ],
      },
    },
  },
  rules: {
    // "no-console": "warn",
    'no-var': 'error',
    'import/no-unresolved': 'error', // eslint-plugin-import eslint-import-resolver-typescript
    // "prefer-const": "error",
    'import/no-named-as-default-member': 'off',
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'off',
    'react-native/no-inline-styles': 'error',
    // "react-native/no-color-literals": "error",
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 'error',
    'no-useless-rename': 'error',
    'object-shorthand': ['error', 'always'],
    'import/namespace': 'off',
    'react-hooks/exhaustive-deps': 'error',

    //NOTE: new rules
    'no-empty': 'warn',
    'no-empty-pattern': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-useless-catch': 'off',
    'react/prop-types': 'off',
  },
};
