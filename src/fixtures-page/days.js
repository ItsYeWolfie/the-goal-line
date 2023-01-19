// Funksioni per ditet e muajit
var today = new Date();
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
var monthName;
switch (todayMonth) {
    case 1:
        monthName = "JAN";
    break;
    case 2:
        monthName = "FEB";
    break;
    case 3:
        monthName = "MAR";
    break;
    case 4:
        monthName = "APR";
    break;
    case 5:
        monthName = "MAY";
    break;
    case 6:
        monthName = "JUNE";
    break;
    case 7:
        monthName = "JULY";
    break;
    case 8:
        monthName = "AUG";
    break;
    case 9:
        monthName = "SEPT";
    break;
    case 10:
        monthName = "OCT";
    break;
    case 11:
        monthName = "NOV";
    break;
    case 12:
        monthName = "DEC";
    break;
    }

var dayBeforeDiv = document.getElementById('day-before-yesterday');
    dayBeforeDiv.innerHTML = (todayDay-2) + monthName;

var yesterdayDiv = document.getElementById('yesterday');
    yesterdayDiv.innerHTML = (todayDay-1) + monthName;

var todayDiv = document.getElementById('today');
    todayDiv.innerHTML = todayDay + monthName;

var tomorrowDiv = document.getElementById('tomorrow');
    tomorrowDiv.innerHTML = (todayDay+1) + monthName;

var afterTomorrowDiv = document.getElementById('day-after-tomorrow');
    afterTomorrowDiv.innerHTML = (todayDay+2) + monthName;
   

// Funksioni per ditet e javes
var Day = today.getDay();

var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

var beforeYesterDay = document.getElementById('beforeYesterDay');
var dayNameB = (Day -2 + 7) % 7;
    beforeYesterDay.innerHTML = daysOfWeek[dayNameB];

var yesterDay = document.getElementById('yesterDay');
var dayNameY = (Day - 1 + 7) % 7;
    yesterDay.innerHTML = daysOfWeek[dayNameY];

var tomorrowDay = document.getElementById('tomorrowDay');
var dayNameT = (Day + 1 + 7) % 7;
    tomorrowDay.innerHTML = daysOfWeek[dayNameT];

var afterTomorrowDay = document.getElementById('afterTomorrowDay');
var dayNameA = (Day + 2 + 7) % 7;
    afterTomorrowDay.innerHTML = daysOfWeek[dayNameA];