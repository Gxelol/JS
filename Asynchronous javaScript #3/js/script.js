function random(min = 0, max = 3) {
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

// wait('Phase 1', random())
//     .then(phase => {
//         console.log(phase)
//         return wait('Phase 2', random());
//     })
//     .then(phase => {
//         console.log(phase);
//         return wait('Phase 3', random());
//     })
//     .then(phase => {
//         console.log(phase);
//         return phase;
//     })
//     .then(phase => {
//         console.log('We finished in the phase: ', phase);
//     })
//     .catch(e => console.log('Error', e));

async function exe() {
    try {
        const phase1 = await wait('Phase 1', random());
        console.log(phase1);
        
        const phase2 = await wait('Phase 2', random());
        console.log(phase2);
        
        const phase3 = await wait('Phase 3', random());
        console.log(phase3);
        
        console.log('We finished in the phase: ', phase3);

    } catch (e) {
        console.log(e);
    }
}
exe();