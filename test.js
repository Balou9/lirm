var tape = require('tape')
var lirm = require('./index.js')
var x = [3620, 4545, 3050, 2247, 3565]
var y = [4122, 2357, 3254, 2007, 3950]

tape('Output is', function (t){
  console.log(lirm(x,y))
  t.ok(lirm(x,y), 'true')
  t.end()
})
