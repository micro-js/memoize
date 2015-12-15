/**
 * Imports
 */

var memoize = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var add = memoize(function add(one, two) {
    return one + two
  })
  var first = add('one', 'two')
  var second = add('one', 'three')

  t.equal(first, second)
  t.end()


})
