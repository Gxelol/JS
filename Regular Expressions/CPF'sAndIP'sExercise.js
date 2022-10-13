const { cpf, ips } = require('./base');

// console.log(cpf);
// console.log(cpf.match(/(\d{3}\.){2}\d{3}\-\d{2}/g));

const ipRegExp = /^((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// for (let i = 0; i <= 300; i++) {
//   const ip = `${i}.${i}.${i}.${i}`;
//   console.log(ip, ip.match(ipRegExp));
// }

console.log(ips.match(ipRegExp));
