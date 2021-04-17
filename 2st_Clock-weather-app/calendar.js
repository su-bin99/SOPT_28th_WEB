const CalHeader = document.querySelector(".cal_header");
const CalDays = document.querySelector(".cal_days");
const CalDates = document.querySelector(".cal_dates");
const Month = document.querySelector(".month");


const getFirstDay = (year, month) => {
    console.log(year + ' ' + month);
    let firstDate = new Date(year, month, 1);
    console.log(firstDate.getDay());
    return firstDate.getDay();
}

const getDateofMonth = ( month) => {
    switch(month+1){
        case 1, 3, 5, 7, 8, 10, 12 : return 31;
        case 2 : return 28;
        default : return 30;
    }
}


const drawCalendar = (year, month, date, day) => {
    drawMonth(month);
    drawDays();
    drawDates(year, month, date, day)
}

const drawMonth = (month) => {
    const months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September", "October",
    "November", "December"];
    Month.innerHTML = `${months[month]}`;
}

const drawDays = () => {
    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    days.forEach((n) => {
        const day = document.createElement("div");
        day.innerText = n;
        if(n == 'Su'){
            day.style.color = 'coral';
        }
        day.className = 'CalDay';
        CalDays.appendChild(day);
    })
}

const drawDates = (year, month, date, day) => {
    const firstDay = getFirstDay(year, month);
    const LastDay = getDateofMonth(month);

    const FirstWeek = document.createElement("div");

    const Weeks = [document.createElement("div"), 
        document.createElement("div"), 
        document.createElement("div"), 
        document.createElement("div")];

    FirstWeek.className = 'Week';
    for( let j = 0 ; j < firstDay; j++){
        const day = document.createElement("div");
        day.innerText ='';
        day.className = 'CalDay';
        FirstWeek.appendChild(day);
    }

    for (let i = 1 ; i <= LastDay ; i++ ){
        if(firstDay + i <=7){
            const day = document.createElement("div");
            day.innerText = i;
            if(i == date) day.style.color = 'coral';
            day.className = 'CalDay';
            FirstWeek.appendChild(day);
        }else{
            const day = document.createElement("div");
            day.innerText = i;
            if(i == date) day.style.color = 'coral';
            day.className = 'CalDay';
            Weeks[parseInt((i+firstDay-1)/7)-1].appendChild(day);
        }
    }

    CalDates.appendChild(FirstWeek);
    Weeks.map((n) =>{
        CalDates.appendChild(n);
        n.className = 'Week';
    })

}

const getDates = () => {
    const timeGetter = new Date();

    let date = timeGetter.getDate(),
        month = timeGetter.getMonth(),
        year = timeGetter.getFullYear(),
        day = timeGetter.getDay();
    drawCalendar(year, month, date, day);
}

getDates();