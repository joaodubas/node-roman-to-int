module.exports = format;

function format(template, options) {
  Object.keys(options).forEach(function substitute(key) {
    var regex = new RegExp('\{{2}' + key + '\}{2}', 'g');
    template = template.replace(regex, options[key]);
  });
  return template;
}
