import {
  mean,
  meanDist,
  dotXyDist,
  squaredSum
} from "./lib/util.ts"

// default should be muliple linear regression

export function bOne (x: number[], y: number[]) : number {
  return dotXyDist(meanDist(x), meanDist(y)) / squaredSum(meanDist(x))
}

export function bZero (x : number[], y: number[]) : number {
  return mean(y) - mean(x) * bOne(x, y)
}

export default function lirm (x : number[], y : number[], predictor : number) : number {
  var res = Math.round((bZero(x, y) + bOne(x, y) * predictor) * 10) / 10
  return res
}
