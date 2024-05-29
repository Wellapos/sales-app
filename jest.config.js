module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(js|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/build/',
    '/dist/'
  ],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}', // Inclua todos os arquivos .ts e .tsx dentro de src
    'App.tsx', // Inclua o arquivo App.tsx na raiz do projeto
    '!src/**/*.d.ts' // Exclua arquivos de declaração TypeScript
  ],
};
