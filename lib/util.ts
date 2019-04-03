export function mean (arr: number[]) : number {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
}

export function meanDist (arr: number[]) : number[] {
  return arr.map(i => i - mean(arr))
}

export function dotXyDist (xdis : number[], ydis: number[]) : number {
  if ( xdis.length != ydis.length ) throw Error('xdis and ydis length should be equal')
  var result = []
  for (let i = 0; i < xdis.length; i++) {
    result[i] = (xdis[i] || 0) * (ydis[i] || 0)
  }
  return result.reduce((acc, cur) => acc + cur, 0)
}

export function squaredSum (arr : number[]) : number {
  return arr.map(i => Math.pow(i,2)).reduce((acc, cur) => acc + cur, 0)
}
