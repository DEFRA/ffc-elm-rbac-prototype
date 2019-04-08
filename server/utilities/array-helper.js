function flattenArray (array) {
  return array.reduce((acc, val) => acc.concat(val), [])
}
function union (array1, array2) {
  return [ ...new Set([...array1, ...array2]) ]
}

module.exports = {
  flattenArray,
  union
}
