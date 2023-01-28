import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './formation.js';
import './hhmatches.js';
import './lineup.js';
import './match-info.js';
import './odds.js';
import './standings.js';
import './statistic.js';

class MobTabs extends LitLightElement {
	static properties = {
		activeTab: {},
	};

	constructor() {
		super();
		this.tabs = [];
		const url = new URL(window.location.href);

		this.tabs = [
			{
				name: 'INFO',
				slug: 'info',
				html: html` <div class="flex flex-col gap-y-2">
					<h6 class="pl-1 text-xs text-gray-300 md:ml-20">MATCH INFO</h6>
					<info-f></info-f>
					<h6 class="mt-2 pl-1 text-xs text-gray-300 md:ml-20">ODDS</h6>
					<odds-f class="mx-auto w-full md:w-4/5"></odds-f>
					<h6 class="mt-2 pl-1 text-xs text-gray-300 md:ml-20">H2H</h6>
					<hhmatches-f class="mx-auto w-full md:w-4/5"></hhmatches-f>
					<img class="mx-auto hidden w-4/5 md:block" src="../images/gjirafa.png" />
				</div>`,
			},
			{
				name: 'LINEUPS',
				slug: 'lineups',
				html: html`<div class="flex flex-col">
					<h6 class=" pl-1 text-xs md:ml-20">FORMATION</h6>
					<formation-f></formation-f>
					<h6 class="mt-4 pl-1 text-xs md:ml-20">LINEUPS</h6>
					<lineup-f></lineup-f>
				</div>`,
			},
			{
				name: 'STATISTICS',
				slug: 'statistics',
				html: html`<statistic-f></statistic-f>`,
			},
			{
				name: 'STANDINGS',
				slug: 'standings',
				html: html`<div class="mx-auto w-full md:w-4/5"><standings-f></standings-f></div>`,
			},
		];

		this.slug = url.searchParams.get('tab') || this.tabs[1].name;
		this.activeTab = 'INFO';
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
				class="mb-4 flex w-full justify-around rounded-t-md border-opacity-30 bg-gray-800 p-2 md:mx-auto md:w-4/5"
			>
				${this.tabs.map(
					(tab) => html` <div
						class="${tab.name === this.activeTab
							? 'text-sky-600 border-b-2 border-sky-600 text-sm md:text-base'
							: ''} my-auto flex cursor-pointer flex-col items-center text-xs hover:text-sky-600
							md:text-sm"
						href="#"
						@click="${() => this.setActiveTab(tab.name)}"
					>
						<p>${tab.name}</p>
					</div>`
				)}
			</div>
			${this.tabs.find((tab) => tab.name === this.activeTab)?.html}
		`;
	}
}

customElements.define('mob-tabs', MobTabs);
