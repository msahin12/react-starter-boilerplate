module.exports = {
  skipCI: false,
  hooks: {
    "pre-commit": "lint-staged",
    "post-merge": "yarn --ignore-scripts --pure-lockfile"
  }
};
