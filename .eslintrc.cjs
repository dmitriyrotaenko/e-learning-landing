module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        semi: ['error', 'always'],
        indent: ['error', 2],
        quotes: ['error', 'single'],
        curly: ['error', 'multi-line'],
        'space-before-function-paren': ['error', 'never'],
        'no-var': 'error',
        'prefer-const': 'error',
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'comma-dangle': ['error', 'never'],
        'object-curly-spacing': ['error', 'always']
      }
    }
  ]
};
