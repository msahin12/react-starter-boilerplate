module.exports = {
  "*.{js,jsx}": ["eslint --fix", "pretty-quick --staged"],
  "*.styles.{js,jsx}": ["stylelint"],
  "*.test.{js,jsx}": ["npm run test"]
};
