# osx-dark-mode [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Check if macOS is set to dark mode/theme.

Requires macOS 10.10 or later. Plus premission granted.
## Installation

```sh
$ npm install --save osx-dark-mode
```

## Usage

```js
const isDarkMode = require('macos-dark-mode');

isDarkMode().then((result) => {
  console.log(result);
  // True, false if not
});
```

## API

### isDarkMode()
Returns a Promise<boolean> of whether you're in dark mode or not.


## License

Apache-2.0 © [Robert James Gabriel](https://www.robertgabriel.ninja)


[npm-image]: https://badge.fury.io/js/osx-dark-mode.svg
[npm-url]: https://npmjs.org/package/osx-dark-mode
[travis-image]: https://travis-ci.org/RobertJGabriel/osx-dark-mode.svg?branch=master
[travis-url]: https://travis-ci.org/RobertJGabriel/osx-dark-mode
[daviddm-image]: https://david-dm.org/RobertJGabriel/osx-dark-mode.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/RobertJGabriel/osx-dark-mode
[coveralls-image]: https://coveralls.io/repos/RobertJGabriel/osx-dark-mode/badge.svg
[coveralls-url]: https://coveralls.io/r/RobertJGabriel/osx-dark-mode
