var format = require('./format.js');

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

exports.makeParser = makeParser;
exports.unity = makeParser(symbols.unity);
exports.dozen = makeParser(symbols.dozen);
exports.hundred = makeParser(symbols.hundred);
exports.thousand = makeParser(symbols.thousand);
exports.roman = new RegExp('[' + roman + ']+', 'gi');

function makeParser(mult) {
  var tmpl = '';
  var raw;
  if (mult.tens && mult.fives) {
    tmpl = '{{ones}}[{{tens}}|{{fives}}]|{{fives}}?{{ones}}{1,3}|{{fives}}';
  } else if (mult.fives) {
    tmpl = '{{ones}}{{fives}}|{{ones}}{1,3}|{{fives}}';
  } else {
    tmpl = '{{ones}}{1,3}'
  }
  raw = format(tmpl, mult);
  return new RegExp('(' + raw + ')', 'gi');
}

