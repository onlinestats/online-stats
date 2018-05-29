var test = require('tape')
var Stats = require('./index')

var values = [1, 3, 5, NaN, 'Bob', '6', 8]

test('Population variance, mean, median: NaN and Strings', (_) => {
  var variance = Stats.Variance()
  var median = Stats.Median()
  var mean = Stats.Mean()

  values.forEach(v => {
    variance(v)
    mean(v)
    median(v)
  })
  _.true(variance() - 5.84 < 0.0000001)
  _.true(mean() - 4.6 < 0.0000001)
  _.true(median() === 5)
  _.end()
})

test('Min/Max', (_) => {
  var min = Stats.Min()
  var max = Stats.Max()
  values.forEach(v => { min(v); max(v) })
  _.true((min() === 1) && (max() === 8))
  _.end()
})
