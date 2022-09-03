function clock() {

function myTimer(second) {
    let date = new Date(second * 1000);

    return date.toLocaleTimeString('en-US', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const clock = document.querySelector('.clock');
let seconds = 0;
let timer;

function startClock() {
    timer = setInterval(function () {
        seconds++;
        clock.innerHTML = myTimer(seconds);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('reset')) {
        e.preventDefault();
        clock.classList.remove('paused')
        clearInterval(timer);
        clock.innerHTML = '00:00:00';
        seconds = 0;
    }

    if (el.classList.contains('stop')) {
        e.preventDefault();
        clock.classList.add('paused');
        clearInterval(timer);
    }

    if (el.classList.contains('start')) {
        e.preventDefault(); 
        clock.classList.remove('paused');
        clearInterval(timer);
        startClock();
    }
})

}

clock();
