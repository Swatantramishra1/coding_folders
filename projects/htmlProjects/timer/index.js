const days =  document.getElementById("days");
const hours =  document.getElementById("hours");
const min =  document.getElementById("min");
const sec =  document.getElementById("sec");

let finalDate = '1 January 2021';
function countDown() {
    const newYearDate = new Date(finalDate);
    const currentDate = new Date();

    const totalSec = (newYearDate - currentDate) / 1000;
    const daysEl = Math.floor(totalSec/3600 /24 );
    const hoursEl = Math.floor((totalSec / 3600) % 24);
    const minEl = Math.floor((totalSec / 60) % 60);
    const secEl = Math.floor((totalSec) % 60);



    days.innerHTML = formateDate(daysEl);
    hours.innerHTML = formateDate(hoursEl);
    min.innerHTML = formateDate(minEl);
    sec.innerHTML = formateDate(secEl);


}

setInterval(() => {
    countDown();
}, 1000);


function formateDate(time) {
    return time < 10 ? `0${time}` : time;
}


