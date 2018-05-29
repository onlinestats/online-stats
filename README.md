# online-stats
Online algorithms for data exploration and analysis

## Installation
`npm i -S online-stats`

## Usage
```javasctipt
const Stats = require('online-stats') // -> { Mean, Median, Max, Min, ... }
```

To process data sequentially we need functions to have internal state. 
That's why there's one extra step - functions initialization

```javasctipt
const mean = Stats.Mean() // -> function
const median = Stats.Median() // -> function
...
```

When functions are initialized, just call them passing a value (for example: `mean(x)`).
Result is returned. To get a final result just call a function without any params: `const result = mean()`

### Mean
```javascript
const mean = Stats.Mean()

mean(1) // -> 1
mean(2) // -> 1.5
mean(9) // -> 4

console.log(mean()) // -> 4
```

### Variance
```javascript
const v = Stats.Variance({ddof: 1}) // 0 (default) - population variance, 1 - sample variance

v(1) // -> 0
v(2) // -> 0.5
v(9) // -> 19

console.log(v()) // -> 19
```

### Median
```javascript
const median = Stats.Median()

median(1) // -> 1
median(2) // -> 1.5
median(9) // -> 2

console.log(median()) // -> 2
```

### Min
### Max

