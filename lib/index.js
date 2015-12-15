/**
 * Modules
 */

var slice = require('@micro-js/slice')

/**
 * Expose memoize
 */

module.exports = memoize['default'] = memoize

/**
 * memoize
 */

function memoize (fn) {
  var cache = {}
  var self = this
  return function (key) {
    if (!cache.hasOwnProperty(key)){
      cache[key] = fn.apply(self, slice(arguments))
    }
    return cache[key]
  }
}
