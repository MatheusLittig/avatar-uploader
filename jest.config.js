module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  snapshotSerializers: ['jest-stitches'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
  },
  testEnvironment: 'jsdom',
};
