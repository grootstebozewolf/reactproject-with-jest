import type { Config } from '@jest/types';

// Define the Jest configuration
const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: 'tsconfig.jest.json', // Specify the Jest-specific TypeScript configuration
            diagnostics: true, // Enable diagnostic reporting from ts-jest
            useESM: true, // Use ES modules if necessary
        }],
        '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript/JSX files using babel-jest
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Map @/ to the src directory
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
        '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock image files
    },
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for Jest
    testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)'], // Match test files
    verbose: true, // Enable verbose output
    transformIgnorePatterns: [
        '/node_modules/(?!(<module-to-transform>|@jridgewell/trace-mapping)/)', // Ignore transforming specific node_modules
    ],
    collectCoverage: true, // Enable code coverage collection
    coverageReporters: ['text', 'lcov'], // Specify coverage report formats
    coveragePathIgnorePatterns: ['/node_modules/'], // Ignore coverage for node_modules
    coverageDirectory: 'coverage', // Output directory for coverage reports
};

// Export the Jest configuration
export default config;
