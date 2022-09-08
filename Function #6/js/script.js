function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
console.log(rand());

function fun1(callback) {
    setTimeout(function() {
        console.log('fun1');
        if (callback) callback();    
    }, rand());
}
function fun2(callback) {
    setTimeout(function() {
        console.log('fun2');
        if (callback) callback();
    }, rand());
}
function fun3(callback) {
    setTimeout(() => {
        console.log('fun3');
        if (callback) callback();
    }, rand());
}

// fun1(function() {
//     fun2(function() {
//         fun3(function() {
//             console.log('Hello World');
//         });
//     });
// });

fun1(fun1Callback);

function fun1Callback() {
    fun2(fun2Callback)
}

function fun2Callback() {
    fun3(fun3Callback)
}

function fun3Callback() {
    console.log('Hello World');
}
