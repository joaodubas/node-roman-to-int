var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('thousand', function () {
  it('Identify a string with the thousand values', function () {
    expect(parser.thousand.test('m')).to.be(true);
    expect(parser.thousand.test('mm')).to.be(true);
    expect(parser.thousand.test('mmm')).to.be(true);
  });
});
