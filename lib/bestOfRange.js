module.exports = function (bestOf) {
  if (bestOf === 1 || !bestOf) return []
  var min = Math.ceil(bestOf / 2)
  var max = bestOf
  var r = []
  for (; min <= max; min++) {
    r.push(min)
  }
  return r
}
