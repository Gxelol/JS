function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
 }

 wait('Wait 1', random(1, 3))
    .then(answer => {
        console.log(answer);
        return wait('Wait 2', random(1, 3));
    })
    .then(answer => {
        console.log(answer);
        return wait(322222, random(1, 3));
    }).then(answer => {
        console.log(answer);
    })
    .catch(e => {
        console.log('ERROR:', e);
    });
