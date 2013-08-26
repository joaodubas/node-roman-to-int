var expect = require('expect.js');
var parser = require('../lib/parser.js');

describe('Unity', function () {
  it('Identify string with values between 1 and 3', function () {
    var numbers = ['i', 'ii', 'iii'];
    numbers.forEach(function(number) {
      expect(number.match(parser.unity).length).to.be.equal(1);
      expect(number.match(parser.unity)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 4 and 5', function () {
    var numbers = ['iv', 'v'];
    numbers.forEach(function(number) {
      expect(number.match(parser.unity).length).to.be.equal(1);
      expect(number.match(parser.unity)[0]).to.be.equal(number);
    });
  });
  it('Identify string with values between 6 and 8', function () {
    var numbers = ['vi', 'vii', 'viii'];
    numbers.forEach(function(number) {
      expect(number.match(parser.unity).length).to.be.equal(1);
      expect(number.match(parser.unity)[0]).to.be.equal(number);
    });
  });
  it('Identify string with value 9', function () {
    var number = 'ix';
    expect(number.match(parser.unity).length).to.be.equal(1);
    expect(number.match(parser.unity)[0]).to.be.equal(number);
  });
});
