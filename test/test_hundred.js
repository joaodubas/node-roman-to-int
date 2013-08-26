var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('hundred', function () {
  it('Identify string with values between 100 and 300', function () {
    var numbers = ['c', 'cc', 'ccc'];
    numbers.forEach(function(number) {
      expect(number.match(parser.hundred).length).to.be.equal(1);
      expect(number.match(parser.hundred)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 400 and 500', function () {
    var numbers = ['cd', 'd'];
    numbers.forEach(function(number) {
      expect(number.match(parser.hundred).length).to.be.equal(1);
      expect(number.match(parser.hundred)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 600 and 800', function () {
    var numbers = ['dc', 'dcc', 'dccc'];
    numbers.forEach(function(number) {
      expect(number.match(parser.hundred).length).to.be.equal(1);
      expect(number.match(parser.hundred)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 900', function () {
    var number = 'cm';
    expect(number.match(parser.hundred).length).to.be.equal(1);
    expect(number.match(parser.hundred)[0]).to.be.equal(number);
  });
});
