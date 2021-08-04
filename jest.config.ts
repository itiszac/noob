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
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/__mocks__/cssModule.ts',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/imageModule.ts',
  },
  setupFiles: ['raf/polyfill', '<rootDir>/__mocks__/setupEnzyme.ts'],
  testRegex: 'tests/.*\\.test\\.tsx$',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
