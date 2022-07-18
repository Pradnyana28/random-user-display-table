module.exports = {
    globals: {
        __PATH_PREFIX__: ""
    },
    moduleNameMapper: {
        ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
        ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/tests/__mocks__/gatsby.js"
    },
    setupFiles: [
        "<rootDir>/tests/loadershim.js"
    ],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testEnvironment: "jsdom",
    testMatch: [
        "<rootDir>/src/**/**/?(*.)+(spec).[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "node_modules",
        "\\.cache",
        "<rootDir>.*/public"
    ],
    transform: {
        "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js"
    },
    transformIgnorePatterns: [
        "node_modules/(?!(gatsby)/)"
    ],
    collectCoverageFrom: [
        "src/**/*.(t|j)sx"
    ],
    coverageDirectory: "./coverage",
    coveragePathIgnorePatterns: [],
    coverageReporters: [
        "text-summary",
        "text",
        "html"
    ],
    coverageThreshold: {
        global: {
            "lines": 70
        }
    },
};