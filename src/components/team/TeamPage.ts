import '../errors/404';
import '../tables/StickyBackgroundTable';
import './TeamFixturesTable';
import './TeamInfoRow';
import './TeamStandings';
import './TeamStatistics';
import '../pages/BreadCrumb';
import { html } from 'lit-html';
// eslint-disable-next-line import/extensions
import { property, customElement } from 'lit/decorators.js';

import { Breadcrumbs } from '../pages/BreadCrumbTypes';
import { fetchData } from '../../lib/helpers/Fetch';
import { LitLightElement } from '../../lib/LitElement';
import { TeamDetails, Venue, Tab, Tabs } from './TeamTypes';

const url = new URL(window.location.href);
const teamID = url.searchParams.get('id')!;
const tabs: Tabs = [
	{
		name: 'Fixtures',
		slug: 'fixtures',
		html: html`
			<t-fixtures-table
				.headers="Versus,League,Season,Round,Time/Date,Side,Status,Score"
				teamID=${teamID}
			>
			</t-fixtures-table>
		`,
	},
	{
		name: 'Statistics',
		slug: 'statistics',
		html: html`<team-statistics .teamID="${teamID}"></team-statistics>`,
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
const breadcrumb: Breadcrumbs = [
	{
		name: 'Teams',
		href: '/teams',
	},
];

const slug = url.searchParams.get('tab') || tabs[1].slug;

@customElement('team-page')
class TeamPage extends LitLightElement {
	@property() loading: boolean = true;

	@property() activeTab: string = '';

	@property() breadcrumb: Array<any> = [];

	@property() teamID: string = '';

	venue: Venue = {} as Venue;

	team: TeamDetails = {} as TeamDetails;

	constructor() {
		super();
		this.classList.add('container', 'mx-auto', 'p-8');
	}

	async connectedCallback() {
		super.connectedCallback();

		this.activeTab = slug;

		const teamObject = await fetchData(
			`https://api.npoint.io/585facaf04546274c0c0/`
		);
		this.loading = false;
		const { team, venue }: { team: TeamDetails; venue: Venue } = teamObject;
		this.team = team;
		this.venue = venue;
		breadcrumb.push({
			name: team.name,
			href: `/team.html?id=${team.id}`,
		});
	}

	setActiveTab(tabName: string | null) {
		if (!tabName) return;
		this.activeTab = tabName;
		url.searchParams.set(
			'tab',
			tabs.find((tab: Tab) => tab.slug === tabName)!.slug
		);
		window.history.pushState({}, '', url);
	}

	render() {
		return html`
			${teamID
				? html`
				${
					this.loading
						? html``
						: html`<nav-breadcrumb .breadcrumb=${breadcrumb}></nav-breadcrumb>`
				}
					<section class="relative grid grid-cols-12">
						<div class="col-span-9 px-8">

							<div class="hidden sm:block">
								<nav
									class="-mb-px flex flex-wrap items-center justify-between border-b border-gray-500"
								>
									${tabs.map(
										(tab: Tab) => html` <button
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
							<section class="py-8">
								${
									tabs.find((tab: Tab) => tab.slug === this.activeTab)!.html
										? tabs.find((tab: Tab) => tab.slug === this.activeTab)!.html
										: html`<p>Coming Soon</p>`
								}
							</section>
						</div>
						<div
							class="sticky top-0 col-span-3 h-screen w-full place-self-start bg-gray-800 p-8 text-center"
						>
							${
								this.loading
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
									  `
							}
						</div>
				  </$> `
				: html`<error-404></error-404>`}
		`;
	}
}
export default TeamPage;
