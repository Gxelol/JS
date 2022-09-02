// try {
//     console.log(dontExist);
// } catch(err) {
//     console.log(`this variable don't exist`);
//     console.log(err);
// }

// function sum(x, y) {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//         throw new Error('x and y need to be numbers');
//     }
//     return x + y;
// }

// try {
//     console.log(sum(1, 2));
//     console.log(sum(1, '2'));
// } catch(err) {
//     // console.log(err);    // We can show the error
//     console.log('Please write just numbers');
// }

// try {
//     console.log(a);
//     console.log('Opened all files');
//     console.log('Replaced a file');
//     console.log('Closeed files');
// } catch (e) {
//     console.log('Fixing the error');
// } finally { //always be executed
//     console.log('Always executed');
// }

function getTime(date) {
    if (date && !(date instanceof Date)) {
        throw new TypeError('Waiting forr instance of Date');
    }

    if (!date) {
        date = new Date();
    }

    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const date = new Date('10-02-1990 23:35:32');    
    const time = getTime();
    console.log(time);
} catch (err) {
    // console.log(err);
} finally {
    console.log('Have a good day');
}