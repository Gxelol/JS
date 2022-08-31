// https://www.w3schools.com/js/js_dates.asp
// const threeHours = 60 * 60 * 1000 * 3;
// const oneDay = 60 * 60 * 24 * 1000;
// const date = new Date(0 + threeHours - oneDay);

// const date = new Date(2014, 3, 20, 15, 14, 38);
// const date = new Date('2020-03-10 10:08:40');

// console.log('Day', date.getDate());
// console.log('Month', date.getMonth());
// console.log('Year', date.getFullYear());
// console.log('Hours', date.getHours());
// console.log('Minutes', date.getMinutes());
// console.log('Seconds', date.getSeconds());
// console.log('weekDay', date.getDay());
// console.log(date.toString());

function zeroLeft(num) {
    return num >=10 ? num: `0${num}`;
}

function formatDate(date) {
    const day = zeroLeft(date.getDate());
    const month = zeroLeft(date.getMonth() + 1);
    const year = zeroLeft(date.getFullYear());
    const hours = zeroLeft(date.getHours());
    const minutes = zeroLeft(date.getMinutes());
    const seconds = zeroLeft(date.getSeconds());
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const date = new Date();
const brazilDate = formatDate(date);

console.log(brazilDate);