// https://buildersbox.corp-sansan.com/entry/2021/05/28/110000

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'tailwindcss',
    'import',
    'unused-imports'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-empty': ['error', { allowEmptyCatch: true }],
    eqeqeq: 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        },
        singleline: {
          delimiter: 'semi'
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error'
  },
  overrides: [
    {
      // TypeScript 用に設定を上書く
      files: ['*.ts', '*.tsx'],
      rules: {}
    },
    {
      // import を sort するため、AutoFix をかける範囲で設定を上書く
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'parent',
              'sibling',
              'index',
              'object',
              'type'
            ],
            pathGroups: [
              {
                pattern: '/@/**',
                group: 'parent',
                position: 'before'
              }
            ],
            alphabetize: {
              order: 'asc'
            },
            'newlines-between': 'always'
          }
        ]
      }
    }
  ]
}
