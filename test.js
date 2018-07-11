var tape = require('tape')
var reg = require('./index.js')

var x = [1, 2, 3, 4, 5]
var y = [2, 4, 5, 4, 5]
var z = [4, 7, 3, 2, 2, 1]

tape('bOne function', function (t){
  t.ok(reg.bOne(x,y), 'is true')
  t.end()
})

tape('yMean functions', function (t){
  t.ok(reg.bZero(x,y), 'is true')
  t.end()
})

tape('Linear regression function', function (t) {
  reg.lirm(x, y, 1, function (err, data) {
    t.ok(data, 'validation is true')
  })
  t.end()
})

tape('Result is typeof number', function (t) {
  reg.lirm(x, y, 1, function (err, data) {
    t.ok(typeof data === 'number')
  })
  t.end()
})

tape('Unequal array length is no problem', function (t) {
  reg.lirm(x, z, 1, function (err, data) {
    t.ok(data)
  })
  t.end()

})
