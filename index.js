function mean (arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

function meanDist (arr) {
  return arr.map(i => i - mean(arr))
}

function dotxyDist (xdis, ydis) {
  var result = []
  for (var i = 0; i < xdis.length; i++){
    result[i] = (xdis[i] || 0) * (ydis[i] || 0)
  }
  return result.reduce((acc, cur) => acc + cur, 0)
}

function distSquared (arr) {
  return arr.map(i => Math.pow(i,2)).reduce((acc, cur) => acc + cur, 0)
}

export function bOne (x, y) {
  return dotxyDist(meanDist(x), meanDist(y)) / distSquared(meanDist(x))
}

export function bZero (x,y) {
  return mean(y) - bOne(x,y) * mean(x)
}

export function lirm (x, y, predictor, callback) {
  var res = Math.round((bZero(x,y) + bOne(x,y) * predictor) * 10) / 10
  callback(null, res)
}
