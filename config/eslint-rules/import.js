module.exports = {
  // Import
  'import/newline-after-import': [
    'error',
    {
      count: 1
    }
  ],
  'import/no-duplicates': 'error',
  'import/order': [
    'warn',
    {
      groups: [
        'external',
        'builtin',
        'unknown',
        'parent',
        'sibling',
        'index'
      ],
      pathGroupsExcludedImportTypes: [],
      alphabetize: {
        order: 'asc'
      }
    }
  ],
};
