# Online statistical algorithms for browsers and Node.js

Collection of online algorithms for data exploration and analysis implemented in JavaScript. Online algorithms process inputs piece by piece. That means you can process data without storing it in memory. More about online algorithms: [https://en.wikipedia.org/wiki/Online_algorithm](https://en.wikipedia.org/wiki/Online_algorithm)

Most algorithms of `online-stats` also support more usual batch mode (i.e. `mean([1,2,3,4])`)

## Installation
`npm i -S online-stats`

## Usage
```javasctipt
const Stats = require('online-stats') // { Mean, Median, Max, Min, ... }
```

To process data sequentially we need functions to have internal state.
That's why there's one extra step - functions initialization

```javasctipt
const mean = Stats.Mean() // -> function mean
const median = Stats.Median() // -> function median
...
```

When functions are initialized, just call them passing a value (for example: `mean(x)`).
Result is returned. To get a final result just call a function without any params: `const result = mean()`

### Web demo
Check how the `online-stats` package is used for online data profiling on [StatSim Profile](https://statsim.com/profile)

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
```javascript
const min = Stats.Min()

min(2) // -> 2
min(6) // -> 2
min(1) // -> 1

console.log(min()) // -> 1
```

### Max
```javascript
const max = Stats.Max()

max(2) // -> 2
max(6) // -> 6
max(1) // -> 6

console.log(max()) // -> 6
```

### Standard Deviation
```javascript
const std = Stats.Std({ddof: 1}) // 0 (default) - population std, 1 - sample std (unbiased)

std(1) // -> 0
std(2) // ~> 0.7071
std(9) // ~> 4.3589

console.log(std()) // ~> 4.3589
```

### Covariance
```javascript
const a = [1, 3, 2, 5, 8, 7, 12, 2, 4]
const b = [8, 6, 9, 4, 3, 3, 2, 7, 7]
const cov = Stats.Covariance({ddof: 1})

a.forEach((ax, i) => { cov(ax, b[i]) })
console.log(cov()) // -> -8.069
```

### Histogram
```javascript
const hist = Stats.Histogram(20)

hist(2)
hist(6)
hist(1)

console.log(hist())
```

### Autocovariance
```javascript
const autocov = Stats.AutoCov(5)

;[1, 2, 3, 4, 5, 6, 7].forEach(v => { autocov(v) })

console.log(autocov())
```

### Autocorrelation
```javascript
const autocor = Stats.AutoCor(5)

;[1, 2, 3, 4, 5, 6, 7].forEach(v => { autocor(v) })

console.log(autocor())
```

### Linear regression
```javascript
const lr = Stats.LinReg()

const f = x => 0.5 * x + 2
;[1, 2, 3, 4, 5, 6].forEach(v => { lr(v, f(v)) })

console.log(lr([7])) // Predict
```
