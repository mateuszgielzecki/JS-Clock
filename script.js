const hour = document.querySelector('.hour-hand');
const minutes = document.querySelector('.min-hand');
const second = document.querySelector('.second-hand');



const getDate = function () {
    const today = new Date();

    const currSec = today.getSeconds();
    const secDegrees = ((currSec / 60) * 360) + 90;

    const currMin = today.getMinutes();
    const minDegrees = ((currMin / 60) * 360) + 90;

    const currHour = today.getHours();
    const hourDegrees = ((currHour / 12) * 360) + 90;


    hour.style.transform = `rotate(${hourDegrees}deg)`;
    minutes.style.transform = `rotate(${minDegrees}deg)`;
    second.style.transform = `rotate(${secDegrees}deg)`;
}



setInterval(() => {
    getDate();
}, 1000);