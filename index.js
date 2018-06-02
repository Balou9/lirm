function lirm (x, y) {

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

    function themExes (xarr) {
      var out = xarr.map(i => i - mean(xarr))
      return out
    }

    function themYs (yarr) {
        var out = yarr.map(i => i - mean(yarr))
        return out
    }

  return {
    'a': themExes(x),
    'b': themYs(y),
    'x each squared sum': sum(themExes(x)),
    'x and y each squared sum': sum(themYs(y))
  }
}

module.exports = lirm
// module.exports = themExes
// module.exports = themYs

/// determine b1 first
/// then b0
