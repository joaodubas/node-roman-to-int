var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Unity', function () {
  it('Identify string with values between 1 and 3', function () {
    expect(parser.unity.test('i')).to.be(true);
    expect(parser.unity.test('ii')).to.be(true);
    expect(parser.unity.test('iii')).to.be(true);
  });
  it('Identify string with values between 4 and 5', function () {
    expect(parser.unity.test('iv')).to.be(true);
    expect(parser.unity.test('v')).to.be(true);
  });
  it('Identify string with values between 6 and 8', function () {
    expect(parser.unity.test('vi')).to.be(true);
    expect(parser.unity.test('vii')).to.be(true);
    expect(parser.unity.test('viii')).to.be(true);
  });
  it('Identify string with values between 9', function () {
    expect(parser.unity.test('ix')).to.be(true);
  });
});
