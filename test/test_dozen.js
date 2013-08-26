var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Dozen', function () {
  it('Identify string with values between 10 and 30', function () {
    var numbers = ['x', 'xx', 'xxx'];
    numbers.forEach(function(number) {
      expect(number.match(parser.dozen).length).to.be.equal(1);
      expect(number.match(parser.dozen)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 40 and 50', function () {
    var numbers = ['xl', 'l'];
    numbers.forEach(function(number) {
      expect(number.match(parser.dozen).length).to.be.equal(1);
      expect(number.match(parser.dozen)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 60 and 80', function () {
    var numbers = ['lx', 'lxx', 'lxxx'];
    numbers.forEach(function(number) {
      expect(number.match(parser.dozen).length).to.be.equal(1);
      expect(number.match(parser.dozen)[0]).to.be.equal(number);
    });
  });
  it('Identify string with value 90', function () {
    var number = 'xc';
    expect(number.match(parser.dozen).length).to.be.equal(1);
    expect(number.match(parser.dozen)[0]).to.be.equal(number);
  });
});
