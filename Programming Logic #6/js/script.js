const points = 999;

// if (points >= 1000) {
//     console.log('VIP User');
// } else {
//     console.log('Normal User');
// }

const userLevel = points >= 1000 ? 'VIP User' : 'Normal User'; //(condition) ? 'value for true : 'value for false';

const userColor = null;
const standartColor = userColor || '#000';

console.log(userLevel, standartColor);