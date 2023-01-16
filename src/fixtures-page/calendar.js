var calendarIcon = document.getElementById("calendar-icon");
var calendar = document.getElementById("calendar");
var currentMonth = document.getElementById("current-month");
var prevMonth = document.getElementById("prev-month");
var nextMonth = document.getElementById("next-month");
var calendarBody = document.getElementById("calendar-body");
      
var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var targetDate = new Date; 
      
function toggleCalendar() {
    calendar.classList.toggle("hidden");
    if (calendar.classList.contains("hidden")) {
      calendarIcon.classList.remove("text-sky-600");
    } else {
      calendarIcon.classList.add("text-sky-600");
    }
  }
  
      
function generateCalendar(month, year, targetDate) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    currentMonth.innerHTML = months[month] + " " + year;
    var date = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0).getDate();
    var firstDay = date.getDay();
    var day = 1;
    var calendarHTML = "";
      
for (var i = 0; i < 6; i++) {
    calendarHTML += "<tr>";
for (var j = 0; j < 7; j++) {
    if (i === 0 && j < firstDay) {
        calendarHTML += "<td class='text-gray-600  text-center p-2 cursor-pointer'>" + '' + "</td>";
    } else if (day > lastDay) {
        calendarHTML += "<td class='text-gray-600 text-center p-2 cursor-pointer'>" + '' + "</td>";
    } else {
        if (day === targetDate.getDate() && month === targetDate.getMonth() && year === targetDate.getFullYear()) {
             calendarHTML += "<td class='p-2 text-center bg-sky-700 rounded-md target-date cursor-pointer'>" + day + "</td>";
        } else {
            calendarHTML += "<td class='p-2 text-center cursor-pointer'>" + day + "</td>";
        }
        day++;
    }   
    }
    calendarHTML += "</tr>";
}
calendarBody.innerHTML = calendarHTML;
}

calendarIcon.addEventListener("click", toggleCalendar);
prevMonth.addEventListener("click", function() {
    if (month === 0) {
        month = 11;
        year--;
    } else {
        month--;
    }
    generateCalendar(month, year, targetDate);
    });

nextMonth.addEventListener("click", function() {
    if (month === 11) {
        month = 0;
        year++;
    } else {
        month++;
    }
    generateCalendar(month, year, targetDate);
});

generateCalendar(month, year, targetDate);