// g - global (find all ocurrences)
// i - insensitive
// () - groups
// | - or 

const { text } = require('./base');

const regExp1 = /(Lorem Ipsum is)(simply dummy)/gi;
const found = regExp1.exec(text)

if (found) {
  console.log(found[0]);
  console.log(found[1]);
  console.log(found[2]);
}


// console.log(regExp1.test(text));