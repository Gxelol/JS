//Reduce + Map + Filter

const num = [12, 45, 72, 74, 86, 92, 58, 38, 19, 3, 2, 20];

const redMapFil = num.filter(value => value % 2 === 0).map(value => value * 2).reduce(function(ac, value) {
    return ac += value;
}, 0);

console.log(redMapFil);
