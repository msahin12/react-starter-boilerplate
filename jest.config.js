module.exports = {
  clearMocks: true,
  verbose: false,
  coverageDirectory: "coverage",
  notify: true,
  notifyMode: "always",

  setupFilesAfterEnv: ["./jest.setup.js"],
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/**/*.styles.{js,jsx,ts,tsx}",
    "!src/**/index.{js,jsx,ts,tsx}",
    "!src/i18n.{js,jsx,ts,tsx}",
    "!src/test-*.{js,jsx,ts,tsx}",
    "!src/theme.{js,jsx,ts,tsx}",
    "!src/constants.{js,jsx,ts,tsx}",
  ],

  moduleNameMapper: {
    "SERVER/api": "<rootDir>/__mocks__/api/index.js",
    "^SRC(.*)$": "<rootDir>/src$1",
    "^COMPONENTS(.*)$": "<rootDir>/src/components$1",
    "^HELPERS(.*)$": "<rootDir>/src/helper$1",
    "^HOOKS(.*)$": "<rootDir>/src/hooks$1",
    "^SERVER(.*)$": "<rootDir>/src/server$1",
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/__mocks__/style.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file.js",
  },

  transformIgnorePatterns: ["/node_modules/(?!imask|lodash)"],
};
