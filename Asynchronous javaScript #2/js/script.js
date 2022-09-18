function random(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new Error('BAD VALUE'));
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase());
            return;
        }, time);
    });
}

// Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//     'First value',
//     wait('Promise 1', 3000),
//     wait('Promise 2', 500),
//     wait('Promise 3', 1000),
//     // wait(1000, 1000),
//     'Another value'
// ];

// Promise.all(promises)
//     .then(function(value) {
//         console.log(value);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

// const promises = [
//     wait('Promise 1', random(1, 5)),
//     wait('Promise 2', random(1, 5)),
//     wait('Promise 3', random(1, 5)),
// ];

// Promise.race(promises)
//     .then(function(value) {
//         console.log(value);
//     })
//     .catch(function(error) {
//         console.log(error);
//     });

function downloadPage() {
    const cached = true;

    if (cached) {
        return Promise.resolve(`Cached page`);
    }else {
        return wait('Downloaded the page', 3000);
    };
}

downloadPage()
    .then(pageData => {
        console.log(pageData);
    })
    .catch(e => console.log('Error', e));

// function downloadPage() {
//     const cached = true;

//     if (cached) {
//         return Promise.reject(`Cached page`);
//     }else {
//         return wait('Downloaded the page', 3000);
//     };
// }

// downloadPage()
//     .then(pageData => {
//         console.log(pageData);
//     })
//     .catch(e => console.log('Error', e));