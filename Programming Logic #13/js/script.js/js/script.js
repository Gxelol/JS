const person = {
    namePerson: 'Ryang',
    surnamePerson: 'Matild',
    agePerson: 23,
    adressPerson: {
        street: 'AV.Catchorro.Kakie',
        number: 2294
    }   
};

// const {namePerson: nameClient, surnamePerson, agePerson} = person;
// console.log(nameClient, surnamePerson, agePerson);

// const {adressPerson: {street: s, number = ''}, adressPerson} = person;
// console.log(s, number, adressPerson);

const {namePerson, ...rest} = person;
console.log(namePerson, rest);