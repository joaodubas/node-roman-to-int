var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Thousand', function () {
  it('Identify string with values between 1000 and 3000', function () {
    var numbers = ['m', 'mm', 'mmm'];
    numbers.forEach(function(number) {
      expect(number.match(parser.thousand).length).to.be.equal(1);
      expect(number.match(parser.thousand)[0]).to.be.equal(number);
    });
  });
});
