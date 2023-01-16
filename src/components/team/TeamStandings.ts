import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';
import { ILeagueStanding, ILeagueWithStanding } from '../../types/League.types';

@customElement('team-standings')
class TeamStandings extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property({ type: Array }) standings: ILeagueStanding[] = [];

	async connectedCallback() {
		super.connectedCallback();
		const leagueData = await fetchData<ILeagueWithStanding>(
			`https://api.npoint.io/9755c43d23971a73fe3f`
		);
		this.loading = false;
		const { standings } = leagueData;
		this.standings = standings;
	}

	render() {
		return html`
			<sticky-background-table
				class="min-w-full"
				.headers=${['#', 'Team', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'PTS', 'Form']}
			>
				<div class="table-row-group divide-y divide-gray-500">
					${this.loading
						? html`<div class="table-row">
								<div class="table-cell w-full py-4 text-center align-middle">
									Loading... <span class="animate-spin">⚽</span>
								</div>
						  </div>`
						: html`
								${this.standings.map((standing, index) => {
									const { team, form } = standing;
									const formArray = form.split('');
									return html`
										<div class="${index % 2 === 1 ? 'bg-gray-600' : ''} table-row">
											<div class="px-6 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.rank}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												<img
													class="inline-block h-6 w-6"
													src="${team.logo}"
													alt="${team.name} Logo"
													loading="lazy"
												/>
												<span class="ml-2 font-semibold">${team.name}</span>
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.played}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.win}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.draw}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.lose}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.goals.for}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.all.goals.against}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${standing.points}
											</div>
											<div class="px-3 py-3.5 text-sm text-gray-300 lg:table-cell">
												${formArray.map((f) => {
													let color = 'bg-gray-500';
													switch (f) {
														case 'W':
															color = 'bg-green-500';
															break;
														case 'D':
															color = 'bg-yellow-500';
															break;
														case 'L':
															color = 'bg-red-500';
															break;

														default:
															break;
													}
													return html`
														<div class="${color} mr-1 inline-block h-4 w-4 rounded-full">
															<span class="sr-only">${f}</span>
														</div>
													`;
												})}
											</div>
										</div>
									`;
								})}
						  `}
				</div>
			</sticky-background-table>
		`;
	}
}

export default TeamStandings;
