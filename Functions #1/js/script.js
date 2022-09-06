//function declaration
//first-class objects

// function something() {
//     console.log('hello');  // classic
// }
// something();

const data = function () {
    console.log(`I'm a data`);
};
// data();

function exeFunction(funct) {
    funct();
}
exeFunction(data);

// Arrow function
const arrowFunction = () => console.log('something');
arrowFunction();

something(function (){
    console.log('anonymous');    
});

// const object = {
//     talk: function() {
//         console.log('talking...');
//     }
// }

// object.talk();

const object = {
    talk() {
        console.log('talking...');
    }
}

object.talk();
