module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@api/(.*)$': '<rootDir>/src/api/$1',
        '^@services/(.*)$': '<rootDir>/src/services/$1',
        '^@components/(.*)$': '<rootDir>/src/components/$1',
        '^@interfaces/(.*)$': '<rootDir>/src/interfaces/$1',
        '^@views/(.*)$': '<rootDir>/src/views/$1',
        '^@constants/(.*)$': '<rootDir>/src/constants/$1',
        '^@modules/(.*)$': '<rootDir>/src/modules/$1',
        '^@enums/(.*)$': '<rootDir>/src/enums/$1',
        '^@utils/(.*)$': '<rootDir>/src/utils/$1'
      },
};