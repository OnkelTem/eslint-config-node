# H&B NodeJS ESLint Config

This configuration is built on [eslint-config-airbnb-base](https://github.com/airbnb/javascript) and uses the following configuration profiles:

- airbnb-base (default)
- [plugin:@typescript-eslint/recommended](https://github.com/typescript-eslint/typescript-eslint)
- [prettier](https://github.com/prettier/eslint-config-prettier)

Under the hood it uses the following ESLint **plugins**:
- 
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)

All ESLint errors are turned into warnings with the [eslint-plugin-only-warn](https://github.com/bfanger/eslint-plugin-only-warn) plugin.

## Usage

Install it as a dev dependency:

```
$ npm i -D @hnbi/eslint-config-node
```

Create `.eslintrc.json` in the project root with the following content:

```json
{
  "extends": "@hnbi/node"
}
```

Extend and tune this file to fit your needs.

## Contributing

To deploy a new version:

```
$ npm version <version>
$ git push -u origin --tags
```
