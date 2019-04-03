import { runTests, test } from "https://deno.land/std/testing/mod.ts"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts"
import sampleData from "./sampledata.ts"
import {
  mean,
  meanDist,
  dotXyDist,
  squaredSum
} from "./util.ts"

test(function calcMean() : void {
  const expected = mean(sampleData.x1)
  console.log(mean(sampleData.x1))
  assertEquals(mean(sampleData.x1), expected)
})

test(function calcSquared() : void {
  const expected = 14
  assertEquals(squaredSum([1, 2, 3]), expected)
})

test(function calcMeanDist() : void {
  const expected = meanDist(sampleData.x1)
  console.log(meanDist(sampleData.x1), meanDist(sampleData.y))
  assertEquals(meanDist(sampleData.x1), expected)
})

test(function calcDotXyDist() : void {
  const yDist = meanDist(sampleData.y)
  const xDist = meanDist(sampleData.x1)
  const expected = dotXyDist(xDist, yDist)
  console.log(dotXyDist(xDist, yDist))
  assertEquals(dotXyDist(xDist, yDist), expected)
})

runTests()
