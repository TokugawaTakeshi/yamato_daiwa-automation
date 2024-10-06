const YamatoDaiwaStyleGuides = require("@yamato-daiwa/style_guides/ECMAScript");


module.exports = [
  {
    ignores: [
      "EntryPoint.js"
    ]
  },
  ...YamatoDaiwaStyleGuides,
  {
    languageOptions: {
      globals: {
        __IS_DEVELOPMENT_BUILDING_MODE__: "readonly",
        __IS_PRODUCTION_BUILDING_MODE__: "readonly",
        NodeJS: "readonly"
      }
    }
  },
  {
    files: [
      "**Settings__FromFile__RawValid.ts",
      "ProjectBuildingConfig__FromFile__RawValid.ts",
      "**Settings__Normalized.ts"
    ],
    rules: {

      /* The merging of type/interface and namespace is completely valid TypeScript, but @typescript-eslint community
      /*  does not wish to support it. See https://github.com/eslint/eslint/issues/15504 for details. */
      "@typescript-eslint/no-redeclare": "off"

    }
  }
];
