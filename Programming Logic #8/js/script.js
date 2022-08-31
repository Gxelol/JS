const date = new Date('1971-06-08');
const weekDay = date.getDay();

// switch (weekDay) {
    //     case 0: 
    //         weekDayWord = 'Sunday';
    //         break;
    //     case 1: 
    //         weekDayWord = 'Monday';
    //         break;
    //     case 2: 
    //         weekDayWord = 'Tuesday';
    //         break;
    //     case 3: 
    //         weekDayWord = 'Wednesday';
//         break;
//     case 4: 
//         weekDayWord = 'Thursday';
//         break;
//     case 5: 
//         weekDayWord = 'Friday';
//         break;
//     case 6: 
//         weekDayWord = 'Saturday';
//         break;
//     default:
//         weekDayWord = '';
// }

function getWeekDayWord(weekDay) {
    
    let weekDayWord;

    switch (weekDay) {
        case 0:
            weekDayWord = 'Sunday';
            return weekDayWord;
        case 1:
            weekDayWord = 'Monday';
            return weekDayWord;
        case 2:
            weekDayWord = 'Tuesday';
            return weekDayWord;
        case 3:
            weekDayWord = 'Wednesday';
            return weekDayWord;
        case 4:
            weekDayWord = 'Thursday';
            return weekDayWord;
        case 5:
            weekDayWord = 'Friday';
            return weekDayWord;
        case 6:
            weekDayWord = 'Saturday';
            return weekDayWord;
        default:
            weekDayWord = '';
    }
}

const weekDayWord = getWeekDayWord(weekDay);

console.log(weekDayWord);

