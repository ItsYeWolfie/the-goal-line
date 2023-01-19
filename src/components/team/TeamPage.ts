import '../errors/404';
import '../tables/StickyBackgroundTable';
import './TeamFixturesTable';
import './TeamInfoRow';
import './TeamStandings';
import './TeamTransfers';
import './TeamOverview';
import './TeamCoaches';
import './TeamPlayers';
import '../pages/BreadCrumb';
import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { IBreadCrumb } from '../../types/BreadCrumb.types';
import { ITab } from '../../types/Tab.types';
import { LitLightElement } from '../../lib/LitElement';
import { ITeam, ITeamAndVenue } from '../../types/Team.types';
import { IVenue } from '../../types/Venue.types';
import { fetchData } from '../../lib/helpers/Fetch';

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
			<t-fixtures-table teamID=${ifDefined(teamID === null ? undefined : teamID)}>
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
		html: html`<team-players>Coming Soon</team-players>`,
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
		html: html`<team-coaches>Coming Soon</team-coaches>`,
	},
	{
		name: 'Injuries',
		slug: 'injuries',
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
		this.classList.add('container', 'mx-auto', 'p-2', 'sm:p-8');
	}

	async connectedCallback() {
		super.connectedCallback();
		this.activeTab = slug;
		const teamObject = await fetchData<ITeamAndVenue>(
			`https://api.npoint.io/585facaf04546274c0c0/`
		).then((data) => data);
		this.loading = false;
		if (!teamObject) return null;
		const { team, venue } = teamObject;
		this.team = team;
		this.venue = venue;
		breadcrumb.push({
			name: team.name,
			href: `/team.html?id=${team.id}`,
		});

		tabs.find((tab) => tab.slug === 'overview')!.html = html`
			<team-overview .team=${team} .venue=${venue}></team-overview>
		`;

		return this.updateComplete;
	}

	setActiveTab(tabName: string | null) {
		if (!tabName) return;
		this.activeTab = tabName;
		const foundTab = tabs.find((tab: ITab) => tab.slug === tabName);
		url.searchParams.set('tab', foundTab ? foundTab.slug : tabs[1].slug);
		window.history.pushState({}, '', url);
	}

	render() {
		if (!teamID) {
			return html`<error-404></error-404>`;
		}

		return html`
			${this.loading ? html`` : html`<nav-breadcrumb .breadcrumb=${breadcrumb}></nav-breadcrumb>`}
			<section class="md:px-8">
				<div class="md:hidden">
					<label class="sr-only" for="tabs">Select a tab</label>
					<select
						class="block w-full rounded-md border-gray-600 bg-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
						@change=${(e: Event) => this.setActiveTab((e.target as HTMLSelectElement).value)}
					>
						${tabs.map(
							(tab) => html`
								<option value=${tab.slug ? tab.slug : tab.name.toLowerCase()}>${tab.name}</option>
							`
						)}
					</select>
				</div>
				<nav class="-mb-px hidden w-max flex-wrap items-center space-x-4 md:flex">
					${tabs.map(
						(tab: ITab) => html` <button
							class="${tab.slug === this.activeTab
								? 'border-indigo-400 text-indigo-500'
								: 'border-transparent text-gray-200 hover:text-gray-400 hover:border-gray-300'} tab-button border-b-2 p-4 text-center text-sm font-medium transition-colors duration-300 ease-in-out"
							type="button"
							@click="${() => this.setActiveTab(tab.slug)}"
						>
							${tab.name}
						</button>`
					)}
				</nav>
				<section class="py-8">${tabs.find((tab) => tab.slug === this.activeTab)?.html}</section>
			</section>
		`;
	}
}
export default TeamPage;
