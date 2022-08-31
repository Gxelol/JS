// WEEK DAY, MONTH NUMBERDAY, YEAR    TIME

const date = new Date();
const weekDay = date.getDay();
const getMonth = date.getMonth();
const dayMonth = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

function getdayWord(weekDay) {

    let dayWord;

    switch (weekDay) {
        case 0: 
        dayWord = 'Sunday';
        return dayWord;
        case 1: 
        dayWord = 'Monday';
        return dayWord;
        case 2: 
        dayWord = 'Tuesday';
        return dayWord;
        case 3: 
        dayWord = 'Wednesday';
        return dayWord;
        case 4: 
        dayWord = 'Thursday';
        return dayWord;
        case 5: 
        dayWord = 'Friday';
        return dayWord;
        case 6: 
        dayWord = 'Saturday';
        return dayWord;
        default: '';
    }
}

function getMonthWord(getMonth) {

    let monthWord;

    switch (getMonth) {
        case 0: 
        monthWord = 'January';
        return monthWord;
        case 1: 
        monthWord = 'February';
        return monthWord;
        case 2: 
        monthWord = 'March';
        return monthWord;
        case 3: 
        monthWord = 'April';
        return monthWord;
        case 4: 
        monthWord = 'May';
        return monthWord;
        case 5: 
        monthWord = 'June';
        return monthWord;
        case 6: 
        monthWord = 'July';
        return monthWord;
        case 7: 
        monthWord = 'August';
        return monthWord;
        case 8: 
        monthWord = 'September';
        return monthWord;
        case 9: 
        monthWord = 'October';
        return monthWord;
        case 10: 
        monthWord = 'November';
        return monthWord;
        case 11: 
        monthWord = 'December';
        return monthWord;
        default: '';
    }
}

function createParagraph() {
    const p = document.createElement('p')
    return p;
}

const dayWord = getdayWord(weekDay);
const monthWord = getMonthWord(getMonth);

function dateMessage() {
    const date = document.querySelector('#date');
    date.innerHTML += `${dayWord}, ${monthWord} ${dayMonth}, ${year} --- ${hours}:${minutes}`;
}

dateMessage();
