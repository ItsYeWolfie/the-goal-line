import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './TeamFixturesTable';
import './TeamTabs';
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

		console.log(teamObject);

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
								<div class="mt-2">
									<p class="font-medium">${this.team.country}</p>
									<p class="text-gray-500 -mt-1 text-sm">Country</p>
								</div>
								${this.teamHTML}
								<header class="text-2xl font-bold mt-4">Venue</header>
								<div class="mt-2">
									<p class="font-medium">${this.venue.name}</p>
									<p class="text-gray-500 -mt-1 text-sm">Name</p>
								</div>
								<div class="mt-2">
									<p class="font-medium">${this.venue.address}</p>
									<p class="text-gray-500 -mt-1 text-sm">Address</p>
								</div>
								<div class="mt-2">
									<p class="font-medium">${this.venue.city}</p>
									<p class="text-gray-500 -mt-1 text-sm">City</p>
								</div>
								<div class="mt-2">
									<p class="font-medium">${this.venue.capacity}</p>
									<p class="text-gray-500 -mt-1 text-sm">Capacity</p>
								</div>
								<div class="mt-2">
									<p class="font-medium">${this.venue.surface}</p>
									<p class="text-gray-500 -mt-1 text-sm">Surface</p>
								</div>
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
