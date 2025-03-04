// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const angularPlugin = require('@angular-eslint/eslint-plugin');
const simpleImportSortPlugin = require("eslint-plugin-simple-import-sort");
const unusedImportsPlugin = require("eslint-plugin-unused-imports");
const prettierPluggin = require("eslint-plugin-prettier");

module.exports = tseslint.config(
  {
    ignores: ["projects/**/*"],
    plugins: {
      "prettier": prettierPluggin
    },
    rules: {
      "prettier/prettier": "warn"
    }
  },
  {
    files: ["**/*.ts"],
    ignores: ["**/*.spec.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json'],
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@angular-eslint': angularPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "unused-imports": unusedImportsPlugin
    },
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      // @ts-ignore
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      ...tsPlugin.configs['recommended-type-checked'].rules,
      "unused-imports/no-unused-imports": "error",
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "sort-imports": "off",
      "import/order": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  {
    files: ["*.component.html"],
    rules: {
      "max-len": ["error", { code: 140 }],
    },
  }
);
