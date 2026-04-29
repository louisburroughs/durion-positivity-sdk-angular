/** @type {import('jest').Config} */
const config = {
  preset: 'jest-preset-angular',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  coverageProvider: 'v8',
  moduleNameMapper: {
    '^@durion-sdk/(.+)$': '<rootDir>/packages/sdk-$1/src/index.ts',
  },
  passWithNoTests: true,
  modulePathIgnorePatterns: ['<rootDir>/packages/.*/dist/'],
  collectCoverageFrom: [
    'src/**/*.ts',
    'packages/sdk-transport/src/**/*.ts',
    'packages/sdk-*/src/workflows/**/*.ts',
    '!**/__tests__/**',
    '!**/*.d.ts',
    '!packages/sdk-transport/src/config.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};

module.exports = config;