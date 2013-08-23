var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Parse', function () {
  describe('unity', function () {
    it('Identify a string with the unity values', function () {
      expect(parser.unity.test('i')).to.be(true);
      expect(parser.unity.test('ii')).to.be(true);
      expect(parser.unity.test('iii')).to.be(true);
      expect(parser.unity.test('iv')).to.be(true);
      // expect(parser.unity.test('v')).to.be(true);
      expect(parser.unity.test('vi')).to.be(true);
      expect(parser.unity.test('vii')).to.be(true);
      expect(parser.unity.test('viii')).to.be(true);
      expect(parser.unity.test('ix')).to.be(true);
    });
  });
  describe('dozen', function () {
    it('Identify a string with the dozen values', function () {
      expect(parser.dozen.test('x')).to.be(true);
      expect(parser.dozen.test('xx')).to.be(true);
      expect(parser.dozen.test('xxx')).to.be(true);
      expect(parser.dozen.test('xl')).to.be(true);
      // expect(parser.unity.test('l')).to.be(true);
      expect(parser.dozen.test('lx')).to.be(true);
      expect(parser.dozen.test('lxx')).to.be(true);
      expect(parser.dozen.test('lxxx')).to.be(true);
      expect(parser.dozen.test('xc')).to.be(true);
    });
  });
  describe('hundred', function () {
    it('Identify a string with the hundred values', function () {
      expect(parser.hundred.test('c')).to.be(true);
      expect(parser.hundred.test('cc')).to.be(true);
      expect(parser.hundred.test('ccc')).to.be(true);
      expect(parser.hundred.test('cd')).to.be(true);
      // expect(parser.hundred.test('d')).to.be(true);
      expect(parser.hundred.test('dc')).to.be(true);
      expect(parser.hundred.test('dcc')).to.be(true);
      expect(parser.hundred.test('dccc')).to.be(true);
      expect(parser.hundred.test('cm')).to.be(true);
    });
  });
  describe('thousand', function () {
    it('Identify a string with the thousand values', function () {
      expect(parser.thousand.test('m')).to.be(true);
      expect(parser.thousand.test('mm')).to.be(true);
      expect(parser.thousand.test('mmm')).to.be(true);
    });
  });
});
