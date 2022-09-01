// const 果物 = ['リンゴ', 'ブドウ', 'バナナ'];

// for (let index in 果物) {
//     console.log(果物[index]);
// }

// const 人 = {
//     苗字: 'Utsunomya', 
//     名前: 'Yuuka', 
//     年: '19'
// };

// for (let i in 人) {
//     console.log(i, 人[i]);
// }

// const 名前 = 'Michael Doc';
const 名前 = ['Michael', 'Doc'];

// for (let i = 0; i < 名前.length; i++) {
//     console.log(名前[i]);
// }

// for (let value of 名前) {
//     console.log(value);
// }

名前.forEach(function (value, index, array) {
    console.log(value, index, array);
})