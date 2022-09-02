// let  i = 0;

// while (i <=10) {
//     console.log(i);
//     i++
// }

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let aleat = random(min, max);

while (aleat !== 10) {
    aleat = random(min, max);
    console.log(aleat);
}

console.log('#######################');

aleat = 10;

do {
    aleat = random(min, max);
    console.log(aleat);
} while (aleat !== 10);