var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Dozen', function () {
  it('Identify string with values between 10 and 30', function () {
    expect(parser.dozen.test('x')).to.be(true);
    expect(parser.dozen.test('xx')).to.be(true);
    expect(parser.dozen.test('xxx')).to.be(true);
  });
  it('Identify string with values between 40 and 50', function () {
    expect(parser.dozen.test('xl')).to.be(true);
    expect(parser.unity.test('l')).to.be(true);
  });
  it('Identify string with values between 60 and 80', function () {
    expect(parser.dozen.test('lx')).to.be(true);
    expect(parser.dozen.test('lxx')).to.be(true);
    expect(parser.dozen.test('lxxx')).to.be(true);
  });
  it('Identify string with value 90', function () {
    expect(parser.dozen.test('xc')).to.be(true);
  });
});
