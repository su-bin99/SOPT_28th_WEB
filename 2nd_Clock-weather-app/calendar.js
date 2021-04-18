const CalHeader = document.querySelector(".cal_header");
const CalDays = document.querySelector(".cal_days");
const CalDates = document.querySelector(".cal_dates");
const Month = document.querySelector(".month");
const Year = document.querySelector(".year");
const PrevBtn = document.getElementById("prev");
const NextBtn = document.getElementById("next");

const RealDate = {
    year : new Date().getFullYear(),
    month : new Date().getMonth(),
    date : new Date().getDate(),
    day : new Date().getDay()
}

let thisDate = {
    year : new Date().getFullYear(),
    month : new Date().getMonth(),
    date : new Date().getDate(),
    day : new Date().getDay()
}
const isThisReal = () => {
    if( thisDate.year == RealDate.year &&
        thisDate.month == RealDate.month &&
        thisDate.date == RealDate.date ) return true;
    else return false;

}

const HandlePrevBtn = () => {
    if(thisDate.month == 0){
        thisDate.year --;
        thisDate.month = 11;
    }else{
        thisDate.month --;
    }
    getDates(thisDate);    
}

const HandleNextBtn = () => {
    if(thisDate.month == 11){
        thisDate.year ++;
        thisDate.month = 0;
    }else{
        thisDate.month ++;
    }
    getDates(thisDate); 
}

const getFirstDay = (year, month) => {
    console.log(year + ' ' + month);
    let firstDate = new Date(year, month, 1);
    console.log(firstDate.getDay());
    return firstDate.getDay();
}

const getDateofMonth = ( year, month) => {
    return new Date(year, month+1, 0).getDate();
}


const drawCalendar = (year, month, date, day) => {
    Year.innerText = `${year}`;
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
    if(CalDays.hasChildNodes()) return;
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
    while ( CalDates.hasChildNodes() ) { 
        CalDates.removeChild( CalDates.firstChild ); 
    }

    const firstDay = getFirstDay(year, month);
    const LastDay = getDateofMonth(year, month);

    const FirstWeek = document.createElement("div");

    const Weeks = [document.createElement("div"), 
        document.createElement("div"), 
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
    console.log(RealDate.month)

    for (let i = 1 ; i <= LastDay ; i++ ){
        if(firstDay + i <=7){
            const day = document.createElement("div");
            day.innerText = i;
            if(isThisReal() && i == date) day.style.color = 'coral';
            day.className = 'CalDay';
            FirstWeek.appendChild(day);
        }else{
            const day = document.createElement("div");
            day.innerText = i;
            if(isThisReal()&& i == date) day.style.color = 'coral';
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

const getDates = (thisDate) => {
    drawCalendar(thisDate.year, thisDate.month, thisDate.date, thisDate.day);
}

getDates(thisDate);

PrevBtn.addEventListener("click", HandlePrevBtn);
NextBtn.addEventListener("click", HandleNextBtn);