module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '\\.(css|scss)$': 'jest-transform-stub',
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
