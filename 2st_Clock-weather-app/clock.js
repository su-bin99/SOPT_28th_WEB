const DATE = document.querySelector(".todayDate"); // 해당 클래스이름을 가진 요소를 가져옵니다
const DIGTAL_CLOCK = document.querySelector(".digital_clock");
const analogHour = document.querySelector(".analog_hour");
const analogMin = document.querySelector(".analog_minute");
const analogSec = document.querySelector(".analog_second");
const digitalBtn = document.querySelector(".digital_btn");

let getTime = () => {
    const timeGetter = new Date();
    let months = ["January", "Feburary", "March", "April", "May",
        "June", "July", "August", "September", "October",
        "November", "December"];
    let sec = timeGetter.getSeconds(),
        min = timeGetter.getMinutes(),
        hour = timeGetter.getHours(),
        day = timeGetter.getDate(),
        month = months[timeGetter.getMonth()],
        year = timeGetter.getFullYear();

    if (ampm_24) { //true면 12단위 false면 24단위
        if (hour < 12) {
            digitalBtn.innerHTML = "AM";
        } else if (hour == 12) {
            digitalBtn.innerHTML = "PM";
        } else {
            digitalBtn.innerHTML = "PM";
            set_Dig_clock(hour - 12, min, sec)
        }
    } else {
        digitalBtn.innerHTML = "24H";
    }
    return { year, month, day, hour, min, sec };
}

let setTIME = () => {
    let { year, month, day, hour, min, sec } = getTime();
    DATE.innerHTML = `Today is <span>${day} ${month}</span>, ${year}`;
    set_Dig_clock(hour, min, sec)
    set_Ana_clock(hour, min, sec);
}

let set_Dig_clock = (hour, min, sec) => {
    DIGTAL_CLOCK.innerHTML = `${fillZero(hour)} : ${fillZero(min)} : ${fillZero(sec)}`;
}

let ampm_24 = true; //true면 12단위, false면 24단위 

const changeTime = () => {
    if (ampm_24) ampm_24 = false;
    else ampm_24 = true;
};

let set_Ana_clock = (hour, min, sec) => {
    const hourDegree = (hour + min / 60) * (360 / 12) + 90;
    const minDegree = min * 6 + 90;
    const secDegree = sec * 6 + 90;

    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMin.style.transform = `rotate(${minDegree}deg)`;
    analogSec.style.transform = `rotate(${secDegree}deg)`;

}

let fillZero = (a) => {
    a = String(a);
    if (a.length < 2) {
        return " " + a;
    } else return a;
}


let init = () => {
    console.log(DATE);
    setInterval(setTIME, 1000); // 1초 간격으로 콜백함수를 실행합니다   
    digitalBtn.addEventListener("click", changeTime);
}

init();