const spanTime = document.getElementById('timer');


let timerId = setInterval(() => {
    spanTime.textContent -= 1;
    if (spanTime.textContent == 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!');
    }
}, 1000);