// g - global (find all ocurrences)
// i - insensitive
// () - groups
// | - or 

const { text } = require('./base');

const regExp1 = /lorem|ipsum/gi;

console.log(text.match(regExp1));
// console.log(text.replace(/Lorem/gi, 'Sabrino'));
// console.log(text.replace(/(lorem|ipsum)/gi, '<b>"$1"</b>'));
console.log(text.replace(/(lorem|ipsum)/gi, function(input) {
  return input.toUpperCase();
}));