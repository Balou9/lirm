// default muliple linear regression 

function mean (arr: array) : number {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}
function meanDist (arr: array) : number {
  return arr.map(i => i - mean(arr))
}

function dotXyDist (xdis : number, ydis: number) : number {
  if ( xdis.length != ydis.length ) throw Error('xdis and ydis length should be equal')
  var result = []
  for (var i = 0; i < xdis.length; i++) {
    result[i] = (xdis[i] || 0) * (ydis[i] || 0)
  }
  return result.reduce((acc, cur) => acc + cur, 0)
}

function distSquared (arr : array) : number {
  return arr.map(i => Math.pow(i,2)).reduce((acc, cur) => acc + cur, 0)
}

function bOne (x: array, y: array) : number {
  return dotXyDist(meanDist(x), meanDist(y) / distSquared(meanDist(x)))
}

function bZero (x : array, y: array) : number {
  return mean(y) - bOne(x, y) * mean(x)
}

function lirm (x : array, y : array, predictor : number, callback : void) : number {
  var res = Math.round((bZero(x, y) + bOne(x, y)) * 10) / 10
  callback(null, res)
}
