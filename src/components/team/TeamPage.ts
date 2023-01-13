import '../errors/404';
import '../tables/StickyBackgroundTable';
import './TeamFixturesTable';
import './TeamInfoRow';
import './TeamStandings';
import './TeamTransfers';
import './TeamOverview';
import '../pages/BreadCrumb';
import { html } from 'lit-html';
// eslint-disable-next-line import/extensions
import { property, customElement } from 'lit/decorators.js';
import { IBreadCrumb } from '../../types/BreadCrumb.types';
import { ITab } from '../../types/Tab.types';
import { fetchData } from '../../lib/helpers/Fetch';
import { LitLightElement } from '../../lib/LitElement';
import { ITeam, ITeamAndVenue } from '../../types/Team.types';
import { IVenue } from '../../types/Venue.types';

const url = new URL(window.location.href);
const teamID = url.searchParams.get('id');
const tabs: ITab[] = [
	{
		name: 'Overview',
		slug: 'overview',
		html: html`<team-overview .teamID="${teamID}"></team-overview>`,
	},
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
		name: 'Leagues History',
		slug: 'leagues-history',
		html: html`<p>Coming Soon</p></team-transfers>`,
	},
	{
		name: 'Players',
		slug: 'players',
		html: html`<p>Coming Soon</p>`,
	},
	{
		name: 'Transfers',
		slug: 'transfers',
		html: html`<team-transfers></team-transfers>`,
	},
	{
		name: 'Standings (Season)',
		slug: 'standings',
		html: html`<team-standings></team-standings>`,
	},
	{
		name: 'Coaches',
		slug: 'coaches',
		html: html`<p>Coming Soon</p>`,
	},
];
const breadcrumb: IBreadCrumb[] = [
	{
		name: 'Teams',
		href: '/teams',
	},
];

const slug = url.searchParams.get('tab') || tabs[0].slug;

@customElement('team-page')
class TeamPage extends LitLightElement {
	@property() loading = true;

	@property() activeTab = '';

	@property() breadcrumb: IBreadCrumb[] = [];

	@property() teamID = '';

	venue: IVenue = {} as IVenue;

	team: ITeam = {} as ITeam;

	constructor() {
		super();
		this.classList.add('container', 'mx-auto', 'p-8');
	}

	async connectedCallback() {
		super.connectedCallback();

		this.activeTab = slug;

		const teamObject = await fetchData<ITeamAndVenue>(
			`https://api.npoint.io/585facaf04546274c0c0/`
		)
			.then((data) => data)
			.catch((err) => alert(err));
		this.loading = false;
		if (!teamObject) return null;
		const { team, venue } = teamObject;
		this.team = team;
		this.venue = venue;
		breadcrumb.push({
			name: team.name,
			href: `/team.html?id=${team.id}`,
		});

		return this;
	}

	setActiveTab(tabName: string | null) {
		if (!tabName) return;
		this.activeTab = tabName;
		const foundTab = tabs.find((tab: ITab) => tab.slug === tabName);
		url.searchParams.set('tab', foundTab ? foundTab.slug : tabs[1].slug);
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
										(tab: ITab) => html` <button
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
								${tabs.find((tab) => tab.slug === this.activeTab)?.html}
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
