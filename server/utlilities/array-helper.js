function flattenArray (array) {
  return array.reduce((acc, val) => acc.concat(val), [])
}

module.exports = {
  flattenArray
}
