// function returnFunction() {
//   const nameC = 'Something'
//     return function() {
//         return nameC;
//     };
// }

// const funct = returnFunction();
// console.dir(funct); 


function returnFunction(nameC) {
    return function() {
        return nameC;
    };
}

const funct1 = returnFunction('Something');
const funct2 = returnFunction('Else');
console.dir(funct1); 
console.dir(funct2); 

console.log(funct1(), funct2());
