const { text, files } = require('./base');

// + 1 or n
// * 0 or n
// ? 0 or 1
// \ escape character
// {n, max}

// console.log(text);
// const regExp1 = /Lo+rem/gi
// console.log(text.match(regExp1));

// const regExp2 = /\.jpe?g/gi;
const regExp2 = /\.jpe{0,1}g/gi;

for (const file of files) {
  const valid = file.match(regExp2);

  if(!valid) continue;

  console.log(file, valid);
}