import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './TeamFixturesTable';
import './TeamTabs';
import './TeamInfoRow';
import './TeamStandings';
import { fetchData } from '../../lib/helpers/fetch';
import '../tables/StickyBackgroundTable';

class TeamPage extends LitLightElement {
	static properties = {
		loading: {},
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
		const teamObject = await fetchData(
			`https://api.npoint.io/585facaf04546274c0c0/`
		);
		this.loading = false;

		const { team, venue } = teamObject;
		this.team = team;
		this.venue = venue;
	}

	render() {
		return html`
			<section class="relative grid grid-cols-12">
				<div class="col-span-9">
					<team-tabs></team-tabs>
					<team-standings></team-standings>
					<t-fixtures-table
						headers="Versus,League,Season,Round,Time/Date,Side,Status,Score"
						teamID="${this.teamID}"
					>
					</t-fixtures-table>
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
