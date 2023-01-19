import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';
// import '../../fixtures-page/calendar.js'
// import '../../fixtures-page/days.js'

class Header extends LitLightElement {
    render() {
        return html
            `<div class="flex justify-around align-middle">
            <span class="bg-gray-200 hover:bg-sky-600 hover:text-gray-200 rounded-sm w-10 text-center h-5 my-auto text-gray-800 cursor-pointer">LIVE</span>
            <div class="flex flex-col text-xs md:text-sm items-center hover:text-sky-600 cursor-pointer"><span id="beforeYesterDay"></span><span id="day-before-yesterday" class="text-xs"></span></div>
            <div class="flex flex-col text-xs md:text-sm items-center hover:text-sky-600 cursor-pointer"><span id="yesterDay"></span><span id="yesterday" class="text-xs"></span></div>
            <div class="flex flex-col text-xs md:text-sm items-center text-sky-600 cursor-pointer"><span id="todayDay">TODAY</span><span id="today" class="text-xs"></span></div>
            <div class="flex flex-col text-xs md:text-sm items-center hover:text-sky-600 cursor-pointer"><span id="tomorrowDay"></span><span id="tomorrow" class="text-xs"></span></div>
            <div class="flex flex-col text-xs md:text-sm items-center hover:text-sky-600 cursor-pointer"><span id="afterTomorrowDay"></span><span id="day-after-tomorrow" class="text-xs"></span></div>
                
            <div class="my-auto cursor-pointer"><i class="fa-regular fa-calendar-days text-2xl hover:text-sky-600" id="calendar-icon"></i></div>
              <div id="calendar" class="bg-gray-700 font-sans hidden absolute rounded-md pl-1 pr-1 border-[0.5px] border-solid border-gray-500 z-10 mt-10 ml-28 md:ml-[33rem] lg:ml-52">
                <div id="calendar-header" class="flex justify-between items-center p-4">
                  <button id="prev-month" class="bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold py-2 px-2 rounded-l">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <div id="current-month" class="text-lg font-medium"></div>
                  <button id="next-month" class="bg-gray-700 hover:bg-gray-800 text-gray-300 font-bold py-2 px-2 rounded-r">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
                <table class="w-full">
                  <thead class="bg-gray-800">
                    <tr class="text-center">
                      <th class="text-xs font-medium p-2">Sun</th>
                      <th class="text-xs font-medium p-2">Mon</th>
                      <th class="text-xs font-medium p-2">Tue</th>
                      <th class="text-xs font-medium p-2">Wed</th>
                      <th class="text-xs font-medium p-2">Thu</th>
                      <th class="text-xs font-medium p-2">Fri</th>
                      <th class="text-xs font-medium p-2">Sat</th>
                    </tr>
                  </thead>
                  <tbody id="calendar-body"></tbody>
                </table>
              </div>
        
        </div>`
}
}

customElements.define('header',Header);

    