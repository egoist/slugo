# slugo

[![NPM version](https://img.shields.io/npm/v/slugo.svg?style=flat)](https://npmjs.com/package/slugo) [![NPM downloads](https://img.shields.io/npm/dm/slugo.svg?style=flat)](https://npmjs.com/package/slugo) [![CircleCI](https://circleci.com/gh/egoist/slugo/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/slugo/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

There're many npm packages that slugify string for you, some support unicode and some others even support CJK character. But I would never include a library which weights 2MB in browser. So that's the purpose of this library which only does basic transformation, eg: remove html tags / special chars / convert space to hyphen, and does not touch non-ascii chars. This is similar to the way GitHub handles the headings in README.

And the size of this library is about 700B minified and 400B gzipped.

## Install

```bash
yarn add slugo
```

CDN: https://unpkg.com/slugo/dist/

## Usage

```js
const slugo = require('slugo')

slugo('hello world, <strong>my kitten!</strong>')
//=> hello-world-my-kitten
```

You can also access `window.slugo` if you're using the CDN version.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**slugo** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/slugo/contributors)).

> [egoist.moe](https://egoist.moe) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
