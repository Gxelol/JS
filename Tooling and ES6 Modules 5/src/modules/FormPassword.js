import genPassword from "./PasswordGenerator";

const result = document.querySelector('.result');
const qntCharacters = document.querySelector('#characters');
const addNumbers = document.querySelector('#numbers');
const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const symbols = document.querySelector('#symbols');
const generatePassword = document.querySelector('.generate-password')

export default () => {
    generatePassword.addEventListener('click', (e) => {
        e.preventDefault();
        result.innerHTML = generate();
    });
};

function generate() {
    const password = genPassword(
        qntCharacters.value, 
        addNumbers.checked,
        uppercase.checked,
        lowercase.checked,
        symbols.checked
    )
    return password || 'Nothing selected';
}