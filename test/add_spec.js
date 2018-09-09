var should = chai.should() // add this
describe('function add', function () {
  it('should add two positive number and return result', function () {
    var result = add(2, 1)
    result.should.be.equal(3)
  })
})
