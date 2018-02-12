module.exports = {
  env: { node: true, browser: true, commonjs: true, es6: true },
  extends: [
    'airbnb/base',
    'prettier',
    'prettier/react',
    'plugin:import/warnings'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  plugins: [
    'react',
    'prettier',
    'import',
    'sort-imports-es6-autofix',
    'import-order-autofix'
  ],
  settings: {
    'import/resolver': {
      'babel-module': {},
      'babel-module-alias': {},
      webpack: { config: './config/webpack/config.babel.js' }
    }
  },
  rules: {
    'space-infix-ops': 2,
    strict: 1,
    'space-before-function-paren': 0,
    'no-underscore-dangle': 0,
    'no-mixed-requires': 0,
    'no-process-exit': 0,
    'no-warning-comments': 0,
    curly: 0,
    'no-confusing-arrow': 0,
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'sort-imports-es6-autofix/sort-imports-es6': [2, [null]],
    'import-order-autofix/order': [2, [null]],
    'no-alert': 0,
    'no-debugger': 1,
    'no-empty': 1,
    'no-invalid-regexp': 1,
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    'no-native-reassign': 1,
    'no-fallthrough': 1,
    'handle-callback-err': 1,
    camelcase: 0,
    'max-len': [
      2,
      {
        code: 80,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
        ignoreUrls: true
      }
    ],
    'no-else-return': 0,
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 3 }],
    'func-call-spacing': ['error', 'never'],
    'no-undef': 'off',
    'no-dupe-keys': 2,
    'no-empty-character-class': 2,
    'no-self-compare': 2,
    'valid-typeof': 2,
    'no-unused-vars': 2,
    'no-multi-spaces': [2, { exceptions: { Property: true } }],
    'no-shadow-restricted-names': 2,
    'no-new-require': 2,
    'no-mixed-spaces-and-tabs': 2,
    'new-cap': 2,
    'semi-spacing': 2,
    'array-bracket-spacing': [
      'error',
      'always',
      { singleValue: true, objectsInArrays: false, arraysInArrays: false }
    ],
    indent: [
      'error',
      2,
      {
        FunctionDeclaration: { body: 1, parameters: 'first' },
        FunctionExpression: { body: 1, parameters: 'first' },
        MemberExpression: 1,
        ObjectExpression: 'first',
        VariableDeclarator: 0
      }
    ],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'key-spacing': [
      2,
      {
        singleLine: { beforeColon: false, afterColon: true, mode: 'minimum' },
        multiLine: { beforeColon: false, mode: 'minimum' }
      }
    ],
    'lines-around-comment': [
      'error',
      {
        beforeBlockComment: true,
        afterBlockComment: false,
        beforeLineComment: true,
        afterLineComment: false,
        allowBlockStart: true,
        allowBlockEnd: true,
        allowObjectStart: true,
        allowObjectEnd: true,
        allowArrayStart: true,
        allowArrayEnd: true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: false, objectsInObjects: false }
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { multiline: true, minProperties: 5 },
        ObjectPattern: { multiline: true }
      }
    ],
    'newline-after-var': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      }
    ],
    'line-comment-position': ['error', { position: 'above' }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore'
      }
    ],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'rest-spread-spacing': ['error', 'never'],
    'import/order': [
      0,
      {
        'newlines-between': 'ignore',
        groups: [
          ['builtin', 'external'],
          ['internal', 'index', 'parent', 'sibling']
        ]
      }
    ],
    'sort-imports': [
      0,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
      }
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      0,
      {
        ignoreCase: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['single', 'multiple', 'all', 'none']
      }
    ],
    'import-order-autofix/order': [
      0,
      {
        'newlines-between': 'ignore',
        groups: [
          ['builtin', 'external'],
          ['internal', 'index', 'parent', 'sibling']
        ]
      }
    ],
    'import/no-named-as-default-member': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'prettier/prettier': [
      0,
      {
        trailingComma: 'all',
        bracketSpacing: false,
        jsxBracketSameLine: true,
        semi: true
      }
    ]
  }
};
