# optimize-angular-lint
Angular linter configuration
## Installation
If you're starting a new Angular project,
```bash
ng new my-app
```
or you can add ESLint to an existing project:
```bash
ng add @angular-eslint/schematics
# Angular will configuring ESLint and automatically crete and update these files:
# CREATE eslint.config.js
# UPDATE package.json
# UPDATE angular.json
```
And then install additional pluggin:
```bash
npm i -D eslint-config-prettier eslint-plugin-prettier
npm i -D import eslint-plugin-simple-import-sort
npm i -D eslint-plugin-unused-imports
```
## Update Your eslint.config.js
Update file `eslint.config.js` like [eslint.config.js](./eslint.config.js)
## Create file .prettierrc
Create file `.prettierrc` and configure
```json
{
    "printWidth": 120,
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "bracketSameLine": true,
    "arrowParens": "always",
    "overrides": [
        {
            "files": "*.html",
            "options": {
                "parser": "angular"
            }
        }
    ]
}
```
## Add scrypt
In `package.json` add scrypt
```json
{
  "scrypt": {
    // other scrypt
    "lint": "ng lint",
    "lint:fix": "ng lint --fix",
    "style:fix": "prettier --write \"**/{src,tests,e2e}/**/*.{*css,ts,html}\"",
    "style": "prettier --check \"**/{src,tests,e2e}/**/*.{*css,ts,html}\""
  }
}
```
## Running Linting:
Use the Angular CLI:
```bash
npm run lint
# Or
ng lint
```
To fix automatically fixable linting errors:
```bash
npm run lint:fix
# Or
ng lint --fix
```
Check style lint:
```bash
npm run style
# and fix style
npm run style:fix
```
