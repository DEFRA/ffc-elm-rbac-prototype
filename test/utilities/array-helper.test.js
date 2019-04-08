const Lab = require('lab')
const Code = require('code')
const lab = exports.lab = Lab.script()
const { union } = require('../../server/utilities/array-helper')

lab.experiment('array helper', () => {
  lab.test('union concatenates arrays, removing duplicates', async () => {
    const array1 = [1, 2, 3, 5]
    const array2 = [4, 2, 3, 5, 6, 1]
    const result = union(array1, array2)
    Code.expect(result).to.exist()
    Code.expect(result.length).to.equal(6)
    Code.expect(result).to.contain([1, 2, 3, 4, 5, 6])
  })

  lab.test('union returns empty array for two empty arrays', async () => {
    const array1 = []
    const array2 = []
    const result = union(array1, array2)
    Code.expect(result).to.exist()
    Code.expect(result.length).to.equal(0)
  })
})
