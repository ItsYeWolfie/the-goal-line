import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';
import '../tables/StickyBackgroundTable';
import { ITeamStatistics } from '../../types/Team.types';

@customElement('team-overview')
class TeamStatistics extends LitLightElement {
	@property({ type: Number }) teamID = 0;

	@property({ type: Boolean }) loading = true;

	team: ITeamStatistics = {} as ITeamStatistics;

	async connectedCallback() {
		super.connectedCallback();
		this.team = await fetchData<ITeamStatistics>(
			'https://api.npoint.io/259bb0faaedc5732aebe'
		);
		this.loading = false;
		console.log(this.team);
	}

	render() {
		return html`
			<section class="mb-8">
				${this.loading
					? 'Loading...'
					: html`
							<div
								class="flex w-full items-center justify-between rounded-sm bg-gray-700 p-8"
							>
								<div class="flex items-center gap-4">
									<img
										class="h-12 w-12"
										src="${this.team.league.logo}"
										alt="${this.team.league.name}"
									/>
									<div class="flex flex-col">
										<h1 class="font-bold">${this.team.league.name}</h1>
										<div class="flex items-center gap-2 text-sm">
											<img
												class="h-4 w-4"
												src="${this.team.league.flag}"
												alt="${this.team.league.country}'s flag"
											/>
											<h2 class="font-bold">${this.team.league.country}</h2>
										</div>
									</div>
								</div>
								<div class="text-center">
									<p class="text-sm font-bold">${this.team.league.season}</p>
									<p class="text-xs">Season</p>
								</div>
								<div class="text-center">
									<p class="text-sm">
										${this.team.form.split('').map((form) => {
											let color;
											switch (form) {
												case 'W':
													color = 'bg-green-600';
													break;
												case 'D':
													color = 'bg-yellow-600';
													break;
												case 'L':
													color = 'bg-red-600';
													break;
												default:
													color = 'bg-gray-600';
													break;
											}

											return html`<span
												class="${color} ml-1 inline-block h-4 w-4 rounded-full text-xs font-bold text-white"
											>
												<span class="sr-only">${form}</span>
											</span>`;
										})}
									</p>
									<p class="text-xs">Recent Form</p>
								</div>
							</div>
					  `}
			</section>
			<div class="flex items-start justify-start gap-4">
				<div class="flex flex-shrink-0 flex-grow-0 basis-6/12 flex-col gap-4">
					<table class="bg-gray-700">
						<thead class="bg-gray-800">
							<tr>
								<th class="py-1 pl-3 text-left uppercase" colspan="100%">
									Sequences
								</th>
							</tr>
						</thead>

						<tbody class="divide-y divide-gray-500 text-xs">
							<tr>
								<td class="w-56 py-2 pl-3">Most goals scored (Home)</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.goals.for.home || '-'}
								</td>
							</tr>

							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Most goals scored (Away)</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.goals.for.away || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Most goals conceded (Home)</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.goals.against.home || '-'}
								</td>
							</tr>

							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Most goals conceded (Away)</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.goals.against.away || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Biggest Win (Home)</td>
								<td class="pr-3 pl-3">
									${this.loading ? '...' : this.team.biggest.wins.home || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Biggest Win (Away)</td>
								<td class="pr-3 pl-3">
									${this.loading ? '...' : this.team.biggest.wins.away || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Biggest Loss (Home)</td>
								<td class="pr-3 pl-3">
									${this.loading ? '...' : this.team.biggest.loses?.home || '-'}
								</td>
							</tr>

							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Biggest Loss (Away)</td>
								<td class="pr-3 pl-3">
									${this.loading ? '...' : this.team.biggest.loses.away || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Most Matches Won in a Row</td>
								<td class="pr-3 pl-3">
									${this.loading ? '...' : this.team.biggest.streak.wins || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Most Matches Lost in a Row</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.streak.loses || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Most Matches With a Draw in a Row</td>
								<td class="pr-3 pl-3">
									${this.loading
										? '...'
										: this.team.biggest.streak.draws || '-'}
								</td>
							</tr>
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Fixtures</th>
								<th class="py-1 pl-3">Wins</th>
								<th class="py-1 pl-3">Draws</th>
								<th class="py-1 pl-3">Loses</th>
								<th class="py-1 pl-3 pr-3">Played</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							<tr>
								<td class="py-2 pl-3">Home</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.wins.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.draws.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.loses.home || '-'}
								</td>
								<td class="pr-3 pl-3 text-center">
									${this.loading
										? '...'
										: this.team.fixtures.played.home || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Away</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.wins.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.draws.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.loses.away || '-'}
								</td>
								<td class="pr-3 pl-3 text-center">
									${this.loading
										? '...'
										: this.team.fixtures.played.away || '-'}
								</td>
							</tr>
						</tbody>
						<tfoot class="bg-gray-800 text-xs">
							<tr class="border-t">
								<td class="py-2 pl-3">Total</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.fixtures.wins.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.fixtures.draws.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.fixtures.loses.total || '-'}
								</td>
								<td class="pr-3 pl-3 text-center">
									${this.loading
										? '...'
										: this.team.fixtures.played.total || '-'}
								</td>
							</tr>
						</tfoot>
					</table>
					<table class="bg-gray-700">
						<thead class="bg-gray-800 text-sm uppercase">
							<tr>
								<th class="py-1 pl-3 text-left">Statistics</th>
								<th class="py-1 pl-3">Home</th>
								<th class="py-1 pl-3">Away</th>
								<th class="py-1 pl-3 pr-3">Total</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							<tr>
								<td class="py-2 pl-3">Matches With a Clean Sheet</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.clean_sheet.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.clean_sheet.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.team.clean_sheet.total || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Matches Without Scoring</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.failed_to_score.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.failed_to_score.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.failed_to_score.total || '-'}
								</td>
							</tr>
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Formation Lineup</th>
								<th class="py-1 pl-3 pr-3">Played</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: this.team.lineups.map(
										(lineup, index) => html`
											<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
												<td class="py-2 pl-3">${lineup.formation}</td>
												<td class="pl-3 text-center">${lineup.played}</td>
											</tr>
										`
								  )}
						</tbody>
					</table>
				</div>
				<div class="flex flex-shrink-0 flex-grow-0 basis-6/12 flex-col gap-4">
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Total Goals</th>
								<th class="py-1 pl-3">Scored</th>
								<th class="py-1 pl-3 pr-3">Received</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Home</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.total.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.total.home || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Away</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.total.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.total.away || '-'}
								</td>
							</tr>
						</tbody>
						<tfoot class="border-t bg-gray-800 text-xs">
							<tr>
								<td class="py-2 pl-3">Total</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.total.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.total.total || '-'}
								</td>
							</tr>
						</tfoot>
					</table>

					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Goals at Minute</th>
								<th class="py-1 text-center" colspan="2">Scored</th>
								<th class="py-1 pr-3 text-center" colspan="2">Received</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										${Object.keys(this.team.goals.for.minute).map(
											(minute: string, index) => {
												return html`
													<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
														<td class="py-2 pl-3">${minute}</td>
														<td class="pl-3 text-center">
															${this.loading
																? '...'
																: this.team.goals.for.minute[minute].total ||
																  '-'}
														</td>
														<td class="pl-3 text-center">
															${this.loading
																? '...'
																: this.team.goals.for.minute[minute]
																		.percentage || '-'}
														</td>
														<td class="pl-3 text-center">
															${this.loading
																? '...'
																: this.team.goals.against.minute[minute]
																		.total || '-'}
														</td>
														<td class="pl-3 pr-3 text-center">
															${this.loading
																? '...'
																: this.team.goals.against.minute[minute]
																		.percentage || '-'}
														</td>
													</tr>
												`;
											}
										)}
								  `}
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Average Goals Per Match</th>
								<th class="py-1 pl-3">Home</th>
								<th class="py-1 pl-3">Away</th>
								<th class="py-1 pl-3 pr-3">Total</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							<tr>
								<td class="py-2 pl-3">Scored</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.average.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.average.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.for.average.total || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Received</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.average.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.average.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.goals.against.average.total || '-'}
								</td>
							</tr>
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Penalties</th>
								<th class="py-1 pl-3">Total</th>
								<th class="py-1 pl-3 pr-3">Percentage</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Scored</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.penalty.scored.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.penalty.scored.percentage || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Missed</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.penalty.missed.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading
										? '...'
										: this.team.penalty.missed.percentage || '-'}
								</td>
							</tr>
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Cards at Minute</th>
								<th class="py-1 text-center" colspan="2">Yellow</th>
								<th class="py-1 pr-3 text-center" colspan="2">Red</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										${Object.keys(this.team.cards.red).map(
											(minute: string, index) => html`
												<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
													<td class="py-2 pl-3">${minute}</td>
													<td class="pl-3 text-center">
														${this.loading
															? '...'
															: this.team.cards.yellow[minute].total || '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading
															? '...'
															: this.team.cards.yellow[minute].percentage ||
															  '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading
															? '...'
															: this.team.cards.red[minute].total || '-'}
													</td>
													<td class="pl-3 pr-3 text-center">
														${this.loading
															? '...'
															: this.team.cards.red[minute].percentage || '-'}
													</td>
												</tr>
											`
										)}
								  `}
						</tbody>
					</table>
				</div>
			</div>
		`;
	}
}

export default TeamStatistics;
