const calendarIcon = document.getElementById('calendar-icon');
const calendar = document.getElementById('calendar');
const currentMonth = document.getElementById('current-month');
const prevMonth = document.getElementById('prev-month');
const nextMonth = document.getElementById('next-month');
const calendarBody = document.getElementById('calendar-body');

const date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
const targetDate = new Date();

function toggleCalendar() {
	calendar.classList.toggle('hidden');
	if (calendar.classList.contains('hidden')) {
		calendarIcon.classList.remove('text-sky-600');
	} else {
		calendarIcon.classList.add('text-sky-600');
	}
}

//   document.addEventListener("click", function(event) {
//     if (!calendar.contains(event.target)) {
//         calendar.classList.toggle("hidden");
//     }
// });

function generateCalendar(month, year, targetDate) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	currentMonth.innerHTML = `${months[month]} ${year}`;
	const date = new Date(year, month, 1);
	const lastDay = new Date(year, month + 1, 0).getDate();
	const firstDay = date.getDay();
	let day = 1;
	let calendarHTML = '';

	for (let i = 0; i < 6; i++) {
		calendarHTML += '<tr>';
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				calendarHTML +=
					"<td class='text-gray-600 text-center p-2 cursor-pointer'>" +
					'' +
					'</td>';
			} else if (day > lastDay) {
				calendarHTML +=
					"<td class='text-gray-600 text-center p-2 cursor-pointer'>" +
					'' +
					'</td>';
			} else {
				if (
					day === targetDate.getDate() &&
					month === targetDate.getMonth() &&
					year === targetDate.getFullYear()
				) {
					calendarHTML += `<td class='p-2 text-center bg-sky-700 rounded-md target-date cursor-pointer'>${day}</td>`;
				} else {
					calendarHTML += `<td class='p-2 text-center hover:bg-gray-800 cursor-pointer'>${day}</td>`;
				}
				day++;
			}
		}
		calendarHTML += '</tr>';
	}
	calendarBody.innerHTML = calendarHTML;
}

calendarIcon.addEventListener('click', toggleCalendar);
prevMonth.addEventListener('click', function () {
	if (month === 0) {
		month = 11;
		year--;
	} else {
		month--;
	}
	generateCalendar(month, year, targetDate);
});

nextMonth.addEventListener('click', function () {
	if (month === 11) {
		month = 0;
		year++;
	} else {
		month++;
	}
	generateCalendar(month, year, targetDate);
});

generateCalendar(month, year, targetDate);
