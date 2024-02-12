// eslint-disable-next-line import/no-anonymous-default-export
export default {
    preset: 'ts-jest',
    transform: {'^.+\\.ts?$': 'ts-jest'},
    clearMocks: true,
    // collectCoverage: true,
    // coverageDirectory: "coverage",
    testEnvironment: "jsdom"
}