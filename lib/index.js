/**
 * Modules
 */

var slice = require('@f/slice')

/**
 * Expose memoize
 */

module.exports = memoize['default'] = memoize


/**
 * Memoize `fn`
 * @param  {Function} fn
 * @return {Function}
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
