module.exports = {
  // Typescript
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/brace-style': [
    'error',
    '1tbs',
    {
      allowSingleLine: true
    }
  ],
  '@typescript-eslint/func-call-spacing': [
    'error',
    'never'
  ],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions',
        'functions',
        'methods'
      ]
    }
  ],
  '@typescript-eslint/no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      enforceForArrowConditionals: false
    }
  ],
  '@typescript-eslint/no-unsafe-member-access': 0,
  '@typescript-eslint/no-unsafe-call': 0,
  '@typescript-eslint/no-unsafe-return': 0,
  '@typescript-eslint/restrict-template-expressions': 0,
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false
    }
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true,
      argsIgnorePattern: '^_'
    }
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      functions: false,
      classes: false,
      variables: false
    }
  ],
  '@typescript-eslint/quotes': [
    'error',
    'single',
    {
      avoidEscape: true
    }
  ],
  '@typescript-eslint/semi': [
    'error',
    'always'
  ],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'interface',
      format: [
        'PascalCase'
      ],
      prefix: [
        'I'
      ]
    },
    {
      selector: 'typeAlias',
      format: [
        'PascalCase'
      ],
      prefix: [
        'T'
      ]
    },
    {
      selector: 'enum',
      format: [
        'PascalCase'
      ],
      prefix: [
        'E'
      ]
    },
    {
      selector: 'enumMember',
      format: [
        'PascalCase'
      ]
    }
  ],
  "@typescript-eslint/no-misused-promises": [
    "error",
    {
      "checksVoidReturn": false
    }
  ]
};
