// function* generator1() {
//     //code
//     yield 'Something1';
//     //code
//     yield 'Something2';
//     //code
//     yield 'Something3';
// }

// const g1 = generator1();
// for (let value of g1) {
//     console.log(value);
// }

// function* generator2() {
//     let i = 0;

//     while(true) {
//         yield i;
//         i++;
//     }
// }

// const g2 = generator2();

// function* generator3 () {
//     yield 0;
//     yield 1;
//     yield 2;
// }

// function* generator4 () {
//     yield* generator3();
//     yield 3;
//     yield 4;
//     yield 5;
// }

// const g4 = generator4();
// for (let value of g4) {
//     console.log(value);
// }

function* generator5() {
    yield() => {
        console.log('Y1');
    };
    
    // return () => {
    //     console.log(`Stop`);
    // }

    yield() => {
        console.log('Y2');
    };
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1()
func2()