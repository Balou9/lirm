var tape = require('tape')
var reg = require('./index.js')

var x = [1, 2, 3, 4, 5]
var y = [2, 4, 5, 4, 5]

tape('bOne function', function (t){
  t.ok(reg.bOne(x,y), 'is true')
  t.end()
})

tape('yMean functions', function (t){
  t.ok(reg.bZero(x,y), 'is true')
  t.end()
})

tape('Linear regression function', function (t) {

  var oneRegLineDot = reg.lirm(x, y, 1)

  t.ok(reg.lirm(x, y, 1), 'is true')
  t.ok(reg.lirm(x, y, 1) === oneRegLineDot, 'validation is true')
  t.ok(reg.lirm(x, y, 1), 'is a number')
  t.end()
})
