const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const genNumber = () => String.fromCharCode(rand(48, 58));
const genUppercase = () => String.fromCharCode(rand(65, 91));
const genLowercase = () => String.fromCharCode(rand(97, 123));
const symbol = `,./~^[]{}!@#$%&*()_+=\-|`;
const genSymbol = () => symbol[rand(0, symbol.length)];

export default function genPassword(qnt, num, uppercase, lowercase, symbols) {
    const arrayPassword = [];
    qnt = Number(qnt);

    for (let i = 0; i < qnt; i++) {
        num && arrayPassword.push(genNumber());
        uppercase && arrayPassword.push(genUppercase());
        lowercase && arrayPassword.push(genLowercase());
        symbols && arrayPassword.push(genSymbol());
    }

    const shuffledPassword = arrayPassword
    .sort(() => 0.5 - Math.random())
    .slice(0, qnt);
    return shuffledPassword.join('');
}
