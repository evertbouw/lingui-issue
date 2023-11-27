module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", "*.cjs", "*.config.*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react-refresh", "lingui"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "lingui/no-unlocalized-strings": 2,
    "lingui/t-call-in-function": 2,
    "lingui/no-single-variables-to-translate": 2,
    "lingui/no-expression-in-message": 2,
    "lingui/no-single-tag-to-translate": 2,
    "lingui/no-trans-inside-trans": 2,
    // "lingui/text-restrictions": [
    //   2,
    //   {
    //     rules: [
    //       {
    //         patterns: ["''", "’", "“"],
    //         message: "Error message",
    //       },
    //     ],
    //   },
    // ],
  },
};
