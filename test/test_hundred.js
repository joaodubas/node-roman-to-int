var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('hundred', function () {
  it('Identify string with values between 100 and 300', function () {
    expect(parser.hundred.test('c')).to.be(true);
    expect(parser.hundred.test('cc')).to.be(true);
    expect(parser.hundred.test('ccc')).to.be(true);
  });
  it('Identify string with values between 400 and 500', function () {
    expect(parser.hundred.test('cd')).to.be(true);
    expect(parser.hundred.test('d')).to.be(true);
  });
  it('Identify string with values between 600 and 800', function () {
    expect(parser.hundred.test('dc')).to.be(true);
    expect(parser.hundred.test('dcc')).to.be(true);
    expect(parser.hundred.test('dccc')).to.be(true);
  });
  it('Identify string with values between 900', function () {
    expect(parser.hundred.test('cm')).to.be(true);
  });
});
