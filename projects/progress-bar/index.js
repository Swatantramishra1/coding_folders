
let interval;
function start() {
    const seconds = 2;
    const progress = document.querySelector(".progress");
    // let atPercente = 0;

    //  interval = setInterval(() => {
    //     atPercente++;
    //     progress.style.width = atPercente + "%";
    //     if(atPercente > 100) {
    //         clearInterval(interval);
    //     }
    // }, seconds * 1000 / 100);
    progress.style.transition = "2s linear all";
    progress.style.width = "100%";
}

function stop() {
    clearInterval(interval);
}