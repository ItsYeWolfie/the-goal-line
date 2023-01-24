import { html } from 'lit';
import moment from 'moment/moment';
import { LitLightElement } from '../../lib/LitElement';

class Header extends LitLightElement {
	render() {
		const dayBeforeYesterday = moment().subtract(2, 'days').format('D MMM').toLocaleUpperCase();
		const yesterday = moment().subtract(1, 'days').format('D MMM').toLocaleUpperCase();
		const today = moment().format('D MMM').toLocaleUpperCase();
		const tomorrow = moment().add(1, 'days').format('D MMM').toLocaleUpperCase();
		const dayAfterTomorrow = moment().add(2, 'days').format('D MMM').toLocaleUpperCase();

		const dayBeforeYesterdayWeek = moment().subtract(2, 'days').format('ddd').toLocaleUpperCase();
		const yesterdayWeek = moment().subtract(1, 'days').format('ddd').toLocaleUpperCase();
		const tomorrowWeek = moment().add(1, 'days').format('ddd').toLocaleUpperCase();
		const dayAfterTomorrowWeek = moment().add(2, 'days').format('ddd').toLocaleUpperCase();

		return html`<div class="flex gap-4 md:gap-20 lg:gap-10">
			<span
				class="my-auto h-5 w-10 cursor-pointer rounded-sm bg-gray-200 text-center text-gray-800 hover:bg-sky-600 hover:text-gray-200"
				>LIVE</span
			>
			<div class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm">
				<span>${dayBeforeYesterdayWeek}</span><span class="text-xs">${dayBeforeYesterday}</span>
			</div>
			<div class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm">
				<span>${yesterdayWeek}</span><span class="text-xs">${yesterday}</span>
			</div>
			<div class="flex cursor-pointer flex-col items-center text-xs text-sky-600 md:text-sm">
				<span>TODAY</span><span class="text-xs" id="today">${today}</span>
			</div>
			<div class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm">
				<span>${tomorrowWeek}</span><span class="text-xs">${tomorrow}</span>
			</div>
			<div class="flex cursor-pointer flex-col items-center text-xs hover:text-sky-600 md:text-sm">
				<span>${dayAfterTomorrowWeek}</span><span class="text-xs">${dayAfterTomorrow}</span>
			</div>
		</div> `;
	}
}

customElements.define('header-f', Header);
