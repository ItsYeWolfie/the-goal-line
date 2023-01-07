import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class TeamTabs extends LitLightElement {
	static properties = {
		activeTab: {},
	};

	constructor() {
		super();
		this.tabModel = {
			name: '',
			switchPage() {
				console.log('Switch page');
			},
		};

		this.tabs = [
			{
				...this.tabModel,
				name: 'Fixtures',
			},
			{
				...this.tabModel,
				name: 'Statistics',
			},
			{
				...this.tabModel,
				name: 'Leagues History',
			},
			{
				...this.tabModel,
				name: 'Players',
			},
			{
				...this.tabModel,
				name: 'Transfers',
			},
			{
				...this.tabModel,
				name: 'Standings (Season)',
			},
			{
				...this.tabModel,
				name: 'Coaches',
			},
		];

		this.activeTab = this.tabs[0].name;
	}

	connectedCallback() {
		super.connectedCallback();
	}

	setActiveTab(tabName) {
		this.activeTab = tabName;
	}

	render() {
		return html`
			<div class="sm:hidden">
				<label class="sr-only" for="tabs">Select a tab</label>
				<select
					class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
					id="tabs"
					name="tabs"
				>
					${this.tabs.map(
						(tab) => `
					<option value=${tab.id ? tab.id : tab.name.toLowerCase()}>${tab.name}</option>
				`
					)}
				</select>
			</div>
			<div class="hidden sm:block">
				<div class="border-b border-gray-200">
					<nav class="-mb-px flex flex-wrap items-center justify-between px-8">
						${this.tabs.map(
							(tab) => html` <button
								class="${tab.name === this.activeTab
									? 'border-indigo-500 text-indigo-600'
									: 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} tab-button border-b-2 p-4 text-center text-sm font-medium transition-colors duration-300 ease-in-out"
								type="button"
								href="#"
								@click="${() => this.setActiveTab(tab.name)}"
							>
								${tab.name}
							</button>`
						)}
					</nav>
				</div>
			</div>
		`;
	}
}

customElements.define('team-tabs', TeamTabs);
