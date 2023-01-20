import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
// import '../../fixtures-page/calendar.js'
// import '../../fixtures-page/days.js'

class Header extends LitLightElement {
	render() {
		return html`<div class="flex justify-around align-middle">
			<span
				class="my-auto h-5 w-10 cursor-pointer rounded-sm bg-gray-200 text-center text-gray-800 hover:bg-sky-600 hover:text-gray-200"
				>LIVE</span
			>
			<div
				class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm"
			>
				<span id="beforeYesterDay"></span
				><span class="text-xs" id="day-before-yesterday"></span>
			</div>
			<div
				class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm"
			>
				<span id="yesterDay"></span><span class="text-xs" id="yesterday"></span>
			</div>
			<div
				class="flex cursor-pointer flex-col items-center text-xs text-sky-600 md:text-sm"
			>
				<span id="todayDay">TODAY</span><span class="text-xs" id="today"></span>
			</div>
			<div
				class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm"
			>
				<span id="tomorrowDay"></span
				><span class="text-xs" id="tomorrow"></span>
			</div>
			<div
				class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm"
			>
				<span id="afterTomorrowDay"></span
				><span class="text-xs" id="day-after-tomorrow"></span>
			</div>

			<div class="my-auto cursor-pointer">
				<i
					class="fa-regular fa-calendar-days text-2xl hover:text-sky-600"
					id="calendar-icon"
				></i>
			</div>
			<div
				class="absolute z-10 mt-10 ml-28 hidden rounded-md border-[0.5px] border-solid border-gray-500 bg-gray-700 pl-1 pr-1 font-sans md:ml-[33rem] lg:ml-52"
				id="calendar"
			>
				<div class="flex items-center justify-between p-4" id="calendar-header">
					<button
						class="rounded-l bg-gray-700 py-2 px-2 font-bold text-gray-300 hover:bg-gray-800"
						id="prev-month"
					>
						<i class="fa-solid fa-chevron-left"></i>
					</button>
					<div class="text-lg font-medium" id="current-month"></div>
					<button
						class="rounded-r bg-gray-700 py-2 px-2 font-bold text-gray-300 hover:bg-gray-800"
						id="next-month"
					>
						<i class="fa-solid fa-chevron-right"></i>
					</button>
				</div>
				<table class="w-full">
					<thead class="bg-gray-800">
						<tr class="text-center">
							<th class="p-2 text-xs font-medium">Sun</th>
							<th class="p-2 text-xs font-medium">Mon</th>
							<th class="p-2 text-xs font-medium">Tue</th>
							<th class="p-2 text-xs font-medium">Wed</th>
							<th class="p-2 text-xs font-medium">Thu</th>
							<th class="p-2 text-xs font-medium">Fri</th>
							<th class="p-2 text-xs font-medium">Sat</th>
						</tr>
					</thead>
					<tbody id="calendar-body"></tbody>
				</table>
			</div>
		</div>`;
	}
}

customElements.define('header', Header);
