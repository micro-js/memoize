
# memoize

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Create a function that memoizes the result of a &#x60;fn&#x60;.

## Installation

    $ npm install @f/memoize

## Usage

```js
var memoize = require('@f/memoize')

var slow = memoize(function (num) {
  var calc = 0
  for (var i = 0; i < num; ++i) {
    calc += i
  }
  return calc
})

// slow
slow(100) // => 4950

// fast
slow(100) // => 4950


```

## API

### memoize(fn)

- `fn` - a function to memoize

**Returns:** memoized function

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/memoize.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/memoize
[git-image]: https://img.shields.io/github/tag/micro-js/memoize.svg
[git-url]: https://github.com/micro-js/memoize
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/memoize.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/memoize
