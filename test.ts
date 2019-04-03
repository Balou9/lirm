import { runTests, test } from "https://deno.land/std/testing/mod.ts"
import { assert, assertEquals } from "https://deno.land/std/testing/asserts.ts"
import sampleData from "./lib/sampledata.ts"
import {
  bOne,
  bZero,
  lirm
} from "./mod.ts"

test(function calcBOne () : void {
  const expected = bOne(sampleData.x1, sampleData.y)
  console.log(bOne(sampleData.x1, sampleData.y))
  assertEquals(bOne(sampleData.x1, sampleData.y), expected)
})

test(function calcBZero () : void {
  const expected = bZero(sampleData.x1, sampleData.y)
  console.log(bZero(sampleData.x1, sampleData.y))
  assertEquals(bZero(sampleData.x1, sampleData.y), expected)
})

test(function calcLirm () : void {
  const expected = lirm(sampleData.x1, sampleData.y, 1)
  console.log(lirm(sampleData.x1, sampleData.y, 1))
  assertEquals(lirm(sampleData.x1, sampleData.y, 1), expected)
})
runTests()
