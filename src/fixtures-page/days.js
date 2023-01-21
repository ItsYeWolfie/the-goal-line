// Funksioni per ditet e muajit
const today = new Date();
const todayDay = today.getDate();
const todayMonth = today.getMonth() + 1;
let monthName;
switch (todayMonth) {
	case 1:
		monthName = 'JAN';
		break;
	case 2:
		monthName = 'FEB';
		break;
	case 3:
		monthName = 'MAR';
		break;
	case 4:
		monthName = 'APR';
		break;
	case 5:
		monthName = 'MAY';
		break;
	case 6:
		monthName = 'JUNE';
		break;
	case 7:
		monthName = 'JULY';
		break;
	case 8:
		monthName = 'AUG';
		break;
	case 9:
		monthName = 'SEPT';
		break;
	case 10:
		monthName = 'OCT';
		break;
	case 11:
		monthName = 'NOV';
		break;
	case 12:
		monthName = 'DEC';
		break;
	default:
		monthName = 'N/A';
}

const dayBeforeDiv = document.getElementById('day-before-yesterday');
dayBeforeDiv.innerHTML = todayDay - 2 + monthName;

const yesterdayDiv = document.getElementById('yesterday');
yesterdayDiv.innerHTML = todayDay - 1 + monthName;

const todayDiv = document.getElementById('today');
todayDiv.innerHTML = todayDay + monthName;

const tomorrowDiv = document.getElementById('tomorrow');
tomorrowDiv.innerHTML = todayDay + 1 + monthName;

const afterTomorrowDiv = document.getElementById('day-after-tomorrow');
afterTomorrowDiv.innerHTML = todayDay + 2 + monthName;

// Funksioni per ditet e javes
const Day = today.getDay();

const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const beforeYesterDay = document.getElementById('beforeYesterDay');
const dayNameB = (Day - 2 + 7) % 7;
beforeYesterDay.innerHTML = daysOfWeek[dayNameB];

const yesterDay = document.getElementById('yesterDay');
const dayNameY = (Day - 1 + 7) % 7;
yesterDay.innerHTML = daysOfWeek[dayNameY];

const tomorrowDay = document.getElementById('tomorrowDay');
const dayNameT = (Day + 1 + 7) % 7;
tomorrowDay.innerHTML = daysOfWeek[dayNameT];

const afterTomorrowDay = document.getElementById('afterTomorrowDay');
const dayNameA = (Day + 2 + 7) % 7;
afterTomorrowDay.innerHTML = daysOfWeek[dayNameA];
