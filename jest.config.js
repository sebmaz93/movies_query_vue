module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/jestGlobalSetup.ts'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['vue', 'js', 'ts'],
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@services(.*)$': '<rootDir>/src/_services$1',
    '^@utils(.*)$': '<rootDir>/src/_utils$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@mocks(.*)$': '<rootDir>/src/mocks$1',
  },
};
