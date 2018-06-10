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

function meanDist (arr) {
  return arr.map(i => i - mean(arr))
}

function distSquared (arr) {
  return sum(arr.map(i => Math.pow(i,2)))
}

function dotxyDist (xdis, ydis) {
  var result = []
  for (var i = 0; i < xdis.length; i++){
    result[i] = (xdis[i] || 0) * (ydis[i] || 0)
  }
  return sum(result)
}

function bZero (x,y) {
  return mean(y) - bOne(x,y) * mean(x)
}

function bOne (x, y) {
  return dotxyDist(meanDist(x), meanDist(y)) / distSquared(meanDist(x))
}


function lirm (x, y, predictor) {
    return bZero(x,y) + bOne(x,y) * predictor
}

module.exports = {
  lirm,
  bOne,
  bZero
}
