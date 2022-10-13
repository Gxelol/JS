const { lookahead } = require('./base');

console.log(lookahead);
// console.log(lookahead.match(/.+[^in]active$/gim));

// Positive lookahead (phrrases that have active)
// console.log(lookahead.match(/.+(?=[^in]active)/gim)); 

// Positive lookahead (phrases that have inactive)
// console.log(lookahead.match(/.+(?=\sinactive)/gim));

// Negative lookahead (phrases that doesn't have active);
// console.log(lookahead.match(/.^(?!.+[^in]active).+$/gim)); 

// Positive lookbehind (if a phrase starts with ONLINE);
// console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// Negative lookbehind (if a phrase doesn't starts with ONLINE);
// console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

const cpf = `
012.250.796-10
111.111.111.11
147.285.963-10
`;

console.log(cpf.match(/^(?!^(\d)\1{2}\.\1{3}\.\1{3}-\1{2}$)\d{3}\.\d{3}\.\d{3}\-\d{2}$/gm));