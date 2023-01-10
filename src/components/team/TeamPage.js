import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './TeamFixturesTable';
import './TeamInfoRow';
import './TeamStandings';
import { fetchData } from '../../lib/helpers/fetch';
import '../tables/StickyBackgroundTable';
import '../errors/404';

class TeamPage extends LitLightElement {
	static properties = {
		loading: {},
		activeTab: {},
	};

	constructor() {
		super();
		this.loading = true;
		this.classList.add('container', 'mx-auto', 'p-8');
		this.tabs = [
			{
				name: 'Fixtures',
				slug: 'fixtures',
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
				slug: 'statistics',
			},
			{
				name: 'Leagues History',
				slug: 'leagues-history',
			},
			{
				name: 'Players',
				slug: 'players',
			},
			{
				name: 'Transfers',
				slug: 'transfers',
			},
			{
				name: 'Standings (Season)',
				slug: 'standings',
				html: html`<team-standings></team-standings>`,
			},
			{
				name: 'Coaches',
				slug: 'coaches',
			},
		];
		const url = new URL(window.location.href);
		this.slug = url.searchParams.get('tab') || this.tabs[0].slug;
		this.teamID = url.searchParams.get('id');
		this.activeTab = this.slug;
	}

	async connectedCallback() {
		super.connectedCallback();

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
		const url = new URL(window.location.href);
		url.searchParams.set(
			'tab',
			this.tabs.find((tab) => tab.slug === tabName).slug
		);
		window.history.pushState({}, '', url);
	}

	render() {
		return html`
			${this.teamID
				? html`<section class="relative grid grid-cols-12">
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
								<div class="border-b border-gray-700">
									<nav
										class="-mb-px flex flex-wrap items-center justify-between px-8"
									>
										${this.tabs.map(
											(tab) => html` <button
												class="${tab.slug === this.activeTab
													? 'border-indigo-400 text-indigo-500'
													: 'border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-300'} tab-button border-b-2 p-4 text-center text-sm font-medium transition-colors duration-300 ease-in-out"
												type="button"
												href="#"
												@click="${() => this.setActiveTab(tab.slug)}"
											>
												${tab.name}
											</button>`
										)}
									</nav>
								</div>
							</div>
							<section class="p-8">
								${this.tabs.find((tab) => tab.slug === this.activeTab).html
									? this.tabs.find((tab) => tab.slug === this.activeTab).html
									: html`<p>Coming Soon</p>`}
							</section>
						</div>
						<div
							class="sticky top-0 col-span-3 h-screen w-full place-self-start bg-gray-800 p-8 text-center"
						>
							${this.loading
								? html`<p>Loading...</p>`
								: html`
										<header class="text-2xl font-bold">
											${this.team.name}
										</header>
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
										<t-info-row
											value="${this.venue.name}"
											key="Name"
										></t-info-row>
										<t-info-row
											value="${this.venue.address}"
											key="Address"
										></t-info-row>
										<t-info-row
											value="${this.venue.city}"
											key="City"
										></t-info-row>
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
				  </section> `
				: html`<error-404></error-404>`}
		`;
	}
}

customElements.define('team-page', TeamPage);
