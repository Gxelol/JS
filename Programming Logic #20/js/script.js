function recebeDoisNums() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return x > y ? console.log(x, 'x') : console.log(y, 'y');
}

recebeDoisNums();