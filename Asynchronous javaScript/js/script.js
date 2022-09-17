function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise(solve, reject) => {
        if(typeof msg !== 'string') reject(false);

        setTimeout(() => {
            solve(msg)
        }, time);
    };
}
