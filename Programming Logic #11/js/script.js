//for let any curly braces will be a block
//fo var just functions will work like a block

const trueClient = true;

let nameClient = 'Damian';
var nameClient2 = 'Pietro';

// var nameClient2 = 'Client3'; // Redeclared

if (trueClient) {
    let nameClient = 'Marlena';
    // console.log(nameClient, nameClient2);

    if (trueClient) {
        let nameClient = 'Mariana';
        console.log(nameClient, nameClient2);
    }
}

function whatever(){
    var nameSomething = 'Else';
    console.log(nameSomething); //works
}
    //console.log(nameSomething); //doesn't work


whatever();