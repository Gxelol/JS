// const datetime = document.querySelector('#date');
// const date = new Date();

// datetime.innerHTML = date.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});      //SECOND OPTION FOR PUTTING DATE  ---- SHORTEST


// WEEK DAY, MONTH NUMBERDAY, YEAR    TIME

const date = new Date();
const weekDay = date.getDay();
const getMonth = date.getMonth();
const dayMonth = date.getDate();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

function getdayWord(weekDay) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[weekDay];
}

function getMonthWord(getMonth) {
    const months = ['Januay', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
    return months[getMonth];
}


function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;
}

function createParagraph() {
    const p = document.createElement('p')
    return p;
}

const dayWord = getdayWord(weekDay);
const monthWord = getMonthWord(getMonth);

function dateMessage() {
    const date = document.querySelector('#date');
    date.innerHTML += `${dayWord}, ${monthWord} ${dayMonth}, ${year} --- ${zeroLeft(hours)}:${zeroLeft(minutes)}`;
}

dateMessage();
