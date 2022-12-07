module.exports = {
  root: true,
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "pug"
  ],
  rules: {
    "@typescript-eslint/await-thenable": "error"
  }
}