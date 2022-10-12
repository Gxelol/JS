const { text, files, html } = require('./base');

const tagGreedy = /<.+>.*<\/.+>/gi
const tagNonGreedy= /<.+?>.*?<\/.+?>/gi

console.log(html.match(tagGreedy)); //greedy
console.log(html.match(tagNonGreedy)); //non-greedy
