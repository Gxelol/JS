// (function() {
//     const name = 'Yatora'
//     console.log(name);
// })();

// const name = 'Something';

(function(age, weight, height) {
    const surname = 'Ishikawa';
    function createName(name) {
        return name + ' ' + surname;
    }

    function sayName() {
        console.log(createName('Izumi'));
    }

    sayName();
    console.log(age, weight, height);

})(20, 70, 1.76);

(function () {
    
})();