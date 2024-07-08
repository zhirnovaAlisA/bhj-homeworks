const lesstime = function () {
    const beginningMeaning = document.getElementById("timer");
    if (beginningMeaning.textContent > 0) {
        beginningMeaning.textContent -= 1;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(interval);
    }
}

let interval = setInterval(lesstime, 1000);



