import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Matches extends LitLightElement {
	static properties = {
		fixtures: { type: Array },
		loading: { type: Boolean },
		groupedMatches: { type: Array },
	};

	constructor() {
		super();
		this.fixtures = [];
		this.loading = true;
		this.groupedMatches = [];
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/551f7ee0bf0c92dbddd2');
		const data = await response.json();
		this.fixtures = data;
		this.loading = false;
		// console.log(data);
		const groupedMatches = {};
		this.fixtures.forEach((fixture) => {
			const leagueId = fixture.league.id;
			if (!groupedMatches[leagueId]) {
				groupedMatches[leagueId] = [fixture];
			} else {
				groupedMatches[leagueId].push(fixture);
			}
			groupedMatches[leagueId].league = fixture.league;
		});
		this.groupedMatches = groupedMatches;
		// console.log(groupedMatches);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-700 align-middle md:mx-auto lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}

		return html`
			<div>
				${Object.keys(this.groupedMatches).map((leagueId) => {
					return html`
						<div>
							<div class="flex cursor-pointer p-2 hover:text-sky-600">
								<span class="my-auto"
									><img
										class="rounded-sm"
										src="${this.groupedMatches[leagueId].league.flag === null
											? '../images/noimg.png'
											: this.groupedMatches[leagueId].league.flag}"
										width="30px"
										height="20px"
								/></span>
								<span class="ml-2 flex flex-col">
									<span class="text-sm">${this.groupedMatches[leagueId].league.name}</span>
									<span class="text-xs text-gray-500"
										>${this.groupedMatches[leagueId].league.country}</span
									>
								</span>
								<span class="my-auto ml-auto"><i class="fa-solid fa-chevron-right"></i></span>
							</div>
							${this.groupedMatches[leagueId].map((fixture) => {
								const day = fixture.fixture.date;
								const date = new Date(day).toLocaleTimeString('en-GB', {
									hour: '2-digit',
									minute: '2-digit',
								});
								return html`
									<a href="./fixture.html" target="_blank"
										><div
											class="mb-2 flex cursor-pointer items-center rounded-md bg-gray-700 duration-150 ease-in hover:h-16 hover:border-2 hover:border-solid hover:border-gray-700 hover:bg-gray-800"
										>
											<span class="my-auto ml-2">${date}</span>
											<div class="flex flex-col p-2">
												<span class="ml-2 flex">
													<img
														class="mr-2"
														src="${fixture.teams.home.logo}"
														width="20px"
														height="20px"
													/>
													<p>${fixture.teams.home.name}</p>
													<p>${fixture.id}</p>
												</span>
												<span class="ml-2 flex">
													<img
														class="mr-2"
														src="${fixture.teams.away.logo}"
														width="20px"
														height="20px"
													/>
													<p>${fixture.teams.away.name}</p>
												</span>
											</div>
											<div class="my-auto ml-auto mr-4 flex flex-col">
												<span>${fixture.goals.home === null ? '-' : fixture.goals.home}</span>
												<span>${fixture.goals.away === null ? '-' : fixture.goals.away}</span>
											</div>
										</div></a
									>
								`;
							})}
						</div>
					`;
				})}
			</div>
		`;
	}
}
customElements.define('matches-m', Matches);
