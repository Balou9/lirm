import sampleData from "./lib/sampledata.ts"
import lirm from "./mod.ts"

function calculateRegressionLine (x : number[], y: number[], predictorLength: number) : number[] {
  let result : number[] = []
  for (let i = 1; i < predictorLength; i++) {
    result.push(lirm(x, y, i))
  }
  return result
}

console.log(calculateRegressionLine(sampleData.x1, sampleData.y, 20))
