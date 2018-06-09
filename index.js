// Add callback function to lirm ?
// Include bOne and bZero to lirm
// Explain user_x input in readme better keyword

function sum (arr) {
  var result = 0
  for (var i = 0; i < arr.length; i++){
    result += arr[i]
  }
  return result
}

function mean (arr) {
  return sum(arr) / arr.length
}

function xDist (xarr) {
  var out = xarr.map(i => i - mean(xarr))
  return out
}

function yDist (yarr) {
  var out = yarr.map(i => i - mean(yarr))
  return out
}

function xDistSquared (arr) {
  var xDistSquared = arr.map(i => Math.pow(i,2))
  return sum(xDistSquared)
}

function dotxyDist (xdis, ydis) {
  var result = []
  for (var i = 0; i < xdis.length; i++){
    result[i] = xdis[i] * ydis[i]
  }
  return sum(result)
}

function bOne (x, y) {
  var outb1 = dotxyDist(xDist(x), yDist(y)) / xDistSquared(xDist(x))
  return outb1
}

function bZero (x,y) {
  var subtractor = bOne(x,y) * mean(x)
  return mean(y) - subtractor
}

function lirm (x, y, user_x) {
    return bZero(x,y) + bOne(x,y) * user_x
}

module.exports = {
  lirm,
  bOne,
  bZero
}
