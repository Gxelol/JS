/* 
&& -> All the expressions need to be true to return true
|| -> All the expressions need to be false to return false
!
*/

// const ex = true && true && true;
// console.log(ex);

// const ex2 = true || true || false;
// console.log(ex2);

// const user = 'Patrick';
// const password = '22313';

// const login = user === 'Patrick' && password === '22313';
// console.log(login);

// console.log(!true); //false
// console.log(!false); //true

/* Short-circuit 

FALSY:

0
'' "" ``
null / undefined
NaN

*/

// console.log('Something' && undefined && 'Else');

// function sayHello() {
//     return 'Hello';
// }

// let exe;
// let exe1 = 'WOW';

// console.log(exe && sayHello());
// console.log(exe1 && sayHello());

// console.log(null || undefined || 0 || 'Play' || NaN);

// const colorUser = null;
// const standartColor = colorUser || 'black';

// console.log(standartColor);

// const colorUser2 = 'Lilac';
// const standartColor2 = colorUser2 || 'black';

// console.log(standartColor2);

const a = 0;
const b = null;
const c = 'uuuu2';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);