var test = require('tape')
var Stats = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Population variance: NaN and Strings', (_) => {
  var variance = Stats.Variance()
  values.forEach(v => { variance(v) })
  _.true(variance() - 5.84 < 0.0000001)
  _.end()
})

test('Min/Max', (_) => {
  var min = Stats.Min()
  var max = Stats.Max()
  values.forEach(v => { min(v); max(v) })
  _.true((min() === 1) && (max() === 8))
  _.end()
})
