import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './TeamFixturesTable';
import './TeamInfoRow';
import './TeamStandings';
import { fetchData } from '../../lib/helpers/fetch';
import '../tables/StickyBackgroundTable';

class TeamPage extends LitLightElement {
	static properties = {
		loading: {},
		activeTab: {},
	};

	constructor() {
		super();
		this.loading = true;
		this.classList.add('container', 'mx-auto', 'p-8');
	}

	async connectedCallback() {
		super.connectedCallback();
		const [, teamID] = window.location.search.split('=');
		this.teamID = teamID;
		this.tabs = [
			{
				name: 'Fixtures',
				html: html`
					<t-fixtures-table
						headers="Versus,League,Season,Round,Time/Date,Side,Status,Score"
						teamID="${this.teamID}"
					>
					</t-fixtures-table>
				`,
			},
			{
				name: 'Statistics',
			},
			{
				name: 'Leagues History',
			},
			{
				name: 'Players',
			},
			{
				name: 'Transfers',
			},
			{
				name: 'Standings (Season)',
				html: html`<team-standings></team-standings>`,
			},
			{
				name: 'Coaches',
			},
		];

		this.activeTab = this.tabs[0].name;
		const teamObject = await fetchData(
			`https://api.npoint.io/585facaf04546274c0c0/`
		);
		this.loading = false;
		const { team, venue } = teamObject;
		this.team = team;
		this.venue = venue;
	}

	setActiveTab(tabName) {
		this.activeTab = tabName;
	}

	render() {
		return html`
			<section class="relative grid grid-cols-12">
				<div class="col-span-9">
					<div class="sm:hidden">
						<label class="sr-only" for="tabs">Select a tab</label>
						<select
							class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
							id="tabs"
							name="tabs"
						>
							${this.tabs.map(
								(tab) => html`
									<option value=${tab.id ? tab.id : tab.name.toLowerCase()}>
										${tab.name}
									</option>
								`
							)}
						</select>
					</div>
					<div class="hidden sm:block">
						<div class="border-b border-gray-200">
							<nav
								class="-mb-px flex flex-wrap items-center justify-between px-8"
							>
								${this.tabs.map(
									(tab) => html` <button
										class="${tab.name === this.activeTab
											? 'border-indigo-400 text-indigo-500'
											: 'border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-300'} tab-button border-b-2 p-4 text-center text-sm font-medium transition-colors duration-300 ease-in-out"
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
					<section class="p-8">
						${this.tabs.find((tab) => tab.name === this.activeTab).html}
					</section>
				</div>
				<div
					class="sticky top-0 col-span-3 h-auto place-self-start p-8 text-center"
				>
					${this.loading
						? html`<p>Loading...</p>`
						: html`
								<header class="text-2xl font-bold">${this.team.name}</header>
								<img
									class="mx-auto"
									src="${this.team.logo}"
									alt="${this.team.name} Logo"
								/>

								<t-info-row
									value="${this.team.country}"
									key="Country"
								></t-info-row>
								<header class="mt-4 text-2xl font-bold">Venue</header>
								<t-info-row value="${this.venue.name}" key="Name"></t-info-row>
								<t-info-row
									value="${this.venue.address}"
									key="Address"
								></t-info-row>
								<t-info-row value="${this.venue.city}" key="City"></t-info-row>
								<t-info-row
									value="${this.venue.capacity}"
									key="Capacity"
								></t-info-row>
								<img
									class="mx-auto"
									src="${this.venue.image}"
									alt="${this.venue.name} Stadium"
								/>
						  `}
				</div>
			</section>
		`;
	}
}

customElements.define('team-page', TeamPage);
