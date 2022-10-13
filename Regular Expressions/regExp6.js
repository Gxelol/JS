const { cpf2 } = require('./base');

// ^ -> starts with
// $ -> ends with
// [^] -> denial
// m - multiline

const cpf = '254.224.877-45';

const cpfRegExp = /(\d{3}\.){2}\d{3}\-\d{2}/g;
console.log(cpf.match(cpfRegExp));
console.log(cpf2.match(cpfRegExp));
console.log(cpf2);
