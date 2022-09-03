function showTime () {
    let date = new Date();

    return date.toLocaleTimeString('en-US', {hour12: false});
}

// function intervalFunction() {
//     console.log(showTime());
// }

const timer = setInterval(function() {
    console.log(showTime());
}, 1000);

setTimeout(function() {
    clearInterval(timer); 
}, 4000);

setTimeout(function() {
    console.log('Hello World'); 
}, 5000);