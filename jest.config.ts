export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",

      {
        diagnostics: {
          ignoreCodes: [1343],
        },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_APP_BASE_URL: "https://newsapi.org/v2/",
                    VITE_APP_API_KEY: "f37d591717cb42e996d816524afffa94",
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  preset: "ts-jest/presets/default-esm",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/consts/(.*)$": "<rootDir>/src/consts/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/routes/(.*)$": "<rootDir>/src/routes/$1",
  },
};
