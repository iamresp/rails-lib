const commonRules = require('./common');
const importRules = require('./import');
const reactAndJsxRules = require('./react-and-jsx');
const typescriptRules = require('./typescript');

module.exports = {
  rules: {
    ...commonRules,
    ...importRules,
    ...reactAndJsxRules,
    ...typescriptRules,
  },
}
