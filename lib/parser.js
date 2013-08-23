exports.makeParser = makeParser;
var symbols = {
  unity: {
    ones: 'I',
    fives: 'V',
    tens: 'X'
  },
  dozen: {
    ones: 'X',
    fives: 'L',
    tens: 'C'
  },
  hundred: {
    ones: 'C',
    fives: 'D',
    tens: 'M'
  },
  thousand: {
    ones: 'M'
  }
};
var roman = (function () {
  var values = [];
  Object.keys(symbols).forEach(function (symbol) {
    Object.keys(symbols[symbol]).forEach(function (key) {
      if (values.indexOf(symbols[symbol][key]) >= 0) return;
      values.push(symbols[symbol][key]);
    });
  });
  return values.join('');
})();

exports.unity = makeParser(symbols.unity);
exports.dozen = makeParser(symbols.dozen);
exports.hundred = makeParser(symbols.hundred);
exports.thousand = makeParser(symbols.thousand);
exports.roman = new RegExp('[' + roman + ']+', 'gi');

function makeParser(mult) {
  var raw = '(' + mult.ones + '{,3})?';
  if (mult.fives) {
    raw += '(' + mult.ones + '?' + mult.fives;
    raw += '|' + mult.fives + mult.ones + '{,3})?';
  }
  if (mult.tens) {
    raw += '(' + mult.ones + mult.tens + ')?';
  }
  return new RegExp(raw, 'gi');
}

