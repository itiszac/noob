export default {
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.test.{ts,tsx}'],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  setupFiles: ['raf/polyfill', '<rootDir>/__mocks__/setupEnzyme.ts'],
  testRegex: 'tests/.*\\.test\\.tsx$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
