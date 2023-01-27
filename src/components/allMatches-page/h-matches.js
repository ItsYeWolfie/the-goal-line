import { html } from 'lit';
import moment from 'moment/moment';
import { LitLightElement } from '../../lib/LitElement';
import './nextMatches.js';
import './nextMatches1.js';
import './liveMatches.js';
import './matches.js';
import './prevMatches.js';
import './prevmatches1.js';

class Header extends LitLightElement {
	static properties = {
		activeTab: {},
	};

	constructor() {
		super();
		this.tabs = [];
		const url = new URL(window.location.href);

		const dayBeforeYesterday = moment().subtract(2, 'days').format('D MMM').toLocaleUpperCase();
		const yesterday = moment().subtract(1, 'days').format('D MMM').toLocaleUpperCase();
		const today = moment().format('D MMM').toLocaleUpperCase();
		const tomorrow = moment().add(1, 'days').format('D MMM').toLocaleUpperCase();
		const dayAfterTomorrow = moment().add(2, 'days').format('D MMM').toLocaleUpperCase();

		const dayBeforeYesterdayWeek = moment().subtract(2, 'days').format('ddd').toLocaleUpperCase();
		const yesterdayWeek = moment().subtract(1, 'days').format('ddd').toLocaleUpperCase();
		const tomorrowWeek = moment().add(1, 'days').format('ddd').toLocaleUpperCase();
		const dayAfterTomorrowWeek = moment().add(2, 'days').format('ddd').toLocaleUpperCase();

		this.tabs = [
			{
				name: 'LIVE',
				slug: 'LIVE',
				html: html`<matches-l></matches-l>`,
			},
			{
				name: dayBeforeYesterday,
				slug: dayBeforeYesterdayWeek,
				html: html`<matches-p></matches-p>`,
			},
			{
				name: yesterday,
				slug: yesterdayWeek,
				html: html`<matches-p1></matches-p1>`,
			},
			{
				name: today,
				slug: 'TODAY',
				html: html`<matches-m></matches-m>`,
			},
			{
				name: tomorrow,
				slug: tomorrowWeek,
				html: html`<matches-n></matches-n>`,
			},
			{
				name: dayAfterTomorrow,
				slug: dayAfterTomorrowWeek,
				html: html`<matches-n1></matches-n1>`,
			},
		];

		this.slug = url.searchParams.get('tab') || this.tabs[1].name;
		this.activeTab = today;
	}

	setActiveTab(tabName) {
		this.activeTab = tabName;
		const url = new URL(window.location.href);
		url.searchParams.set('tab', this.tabs.find((tab) => tab.name === tabName).name);
		window.history.replaceState({}, '', url);
	}

	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<div
				class="flex w-full justify-around rounded-t-md border-b-2 border-gray-200 border-opacity-30 bg-gray-700 p-2"
			>
				${this.tabs.map(
					(tab) => html` <div
						class="${tab.name === this.activeTab
							? 'text-sky-600 text-sm md:text-base'
							: ''} my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600
							md:text-sm"
						href="#"
						@click="${() => this.setActiveTab(tab.name)}"
					>
						<span>${tab.slug === 'LIVE' ? '' : tab.slug}</span>
						<p>${tab.name}</p>
					</div>`
				)}
			</div>
			${this.tabs.find((tab) => tab.name === this.activeTab)?.html}
		`;
	}
}

customElements.define('header-f', Header);
