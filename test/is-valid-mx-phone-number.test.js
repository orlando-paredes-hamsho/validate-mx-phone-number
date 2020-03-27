var expect = require('chai').expect
var isValidMxPhoneNumber = require('../src/index').isValidMxPhoneNumber

describe('isValidMxPhoneNumber', function () {
  it('Works with 10 numbers', function () {
    expect(isValidMxPhoneNumber('1234567890')).to.be.true;
  })
  it('Works with 10 numbers separated by dashes', function () {
    expect(isValidMxPhoneNumber('123-456-7890')).to.be.true;
  })
  it('Works with 10 numbers with initial parens', function () {
    expect(isValidMxPhoneNumber('(123)4567890')).to.be.true;
  })
  it('Works with 10 numbers with initial parens and separated by dashes', function () {
    expect(isValidMxPhoneNumber('(123)-456-7890')).to.be.true;
  })
  it('Does not work with 11 numbers', function () {
    expect(isValidMxPhoneNumber('12345678901')).to.be.false;
  })
  it('Does not work with int', function () {
    expect(isValidMxPhoneNumber(1234567890)).to.be.false;
  })
  it('Does not work with bool', function () {
    expect(isValidMxPhoneNumber(true)).to.be.false;
  })
  it('Does not work with array', function () {
    expect(isValidMxPhoneNumber([])).to.be.false;
  })
  it('Does not work with empty object literal', function () {
    expect(isValidMxPhoneNumber({})).to.be.false;
  })
})
