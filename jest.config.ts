export default {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy'
  }
}
