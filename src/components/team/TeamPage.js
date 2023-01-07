import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './TeamFixturesTable';
import './TeamTabs';
import './TeamInfoRow';
import { fetchData } from '../../lib/helpers/fetch';

class TeamPage extends LitLightElement {
	static properties = {
		loading: {},
	};

	constructor() {
		super();
		this.loading = true;
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
			<section class="grid grid-cols-12 container">
				<div class="col-span-9">
					<team-tabs></team-tabs>
					<div class="flex flex-wrap">
						<t-fixtures-table
							headers="Versus,League,Season,Round,Time/Date,Side,Status,Score"
							teamID="${this.teamID}"
						>
							asd
						</t-fixtures-table>

						<div class="basis-4/12">
							<team-standings></team-standings>
						</div>
					</div>
				</div>
				<div class="p-8 col-span-3 text-center h-full">
					${this.loading
						? html`<p>Loading...</p>`
						: html`
								<header class="text-2xl font-bold">${this.team.name}</header>
								<img
									src="${this.team.logo}"
									alt="${this.team.name} Logo"
									class="mx-auto"
								/>

								<t-info-row
									key="Country"
									value="${this.team.country}"
								></t-info-row>
								<header class="text-2xl font-bold mt-4">Venue</header>
								<t-info-row key="Name" value="${this.venue.name}"></t-info-row>
								<t-info-row
									key="Address"
									value="${this.venue.address}"
								></t-info-row>
								<t-info-row key="City" value="${this.venue.city}"></t-info-row>
								<t-info-row
									key="Capacity"
									value="${this.venue.capacity}"
								></t-info-row>
								<img
									src="${this.venue.image}"
									alt="${this.venue.name} Stadium"
									class="mx-auto"
								/>
						  `}
				</div>
			</section>
		`;
	}
}

customElements.define('team-page', TeamPage);
