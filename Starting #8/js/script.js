let a = 'Something';
let b = a;
console.log(a, b);

a[0] = 'T'; // primitive values are immutable
console.log(a, b);

a = "Else"
console.log(a, b); // the b value will still be 'Something' because his value is saved in memory

let A = ['A', 'B', 'C'];
let B = A;
console.log(A, B);

A[1] = 'E';
console.log(A, B); // reference values are mutable

B.push('D');
console.log(A, B); // the b and a value will be the equal because they are pointing the same place in memory

const p = {
    name: 'Person',
    surname: 'Hito'
};

const o = p;

p.name = 'Logan';
console.log(o);