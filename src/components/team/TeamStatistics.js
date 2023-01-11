import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/fetch';
import '../tables/StickyBackgroundTable';
import './StatisticRow';

class TeamStatistics extends LitLightElement {
	static properties = {
		teamID: {},
		loading: {},
	};

	constructor() {
		super();
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const teamstatistics = await fetchData(
			'https://api.npoint.io/259bb0faaedc5732aebe'
		);
		this.loading = false;
		// Add every element of teamstatistics to this
		Object.keys(teamstatistics).forEach((key) => {
			this[key] = teamstatistics[key];
		});
		console.log('Form', this.form);
		console.log('Team', this.team);
		console.log('Cards', this.cards);
		console.log('league', this.league);
		console.log('penalty', this.penalty);
	}

	render() {
		return html`
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
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3 pr-3">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="w-56 py-2 pl-3">Most goals scored (Home)</td>
											<td class="pr-3 pl-3">${this.biggest.goals.for.home}</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Most goals scored (Away)</td>
											<td class="pr-3 pl-3">${this.biggest.goals.for.away}</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Most goals conceded (Home)</td>
											<td class="pr-3 pl-3">
												${this.biggest.goals.against.home}
											</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Most goals conceded (Away)</td>
											<td class="pr-3 pl-3">
												${this.biggest.goals.against.away}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Biggest Win (Home)</td>
											<td class="pr-3 pl-3">
												${this.biggest.wins.home ? this.biggest.wins.home : '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Biggest Win (Away)</td>
											<td class="pr-3 pl-3">
												${this.biggest.wins.away ? this.biggest.wins.away : '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Biggest Loss (Home)</td>
											<td class="pr-3 pl-3">
												${this.biggest.loses?.home
													? this.biggest.loses.home
													: '-'}
											</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Biggest Loss (Away)</td>
											<td class="pr-3 pl-3">
												${this.biggest.loses.away
													? this.biggest.loses.away
													: '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Most Matches Won in a Row</td>
											<td class="pr-3 pl-3">
												${this.biggest.streak.wins
													? this.biggest.streak.wins
													: '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Most Matches Lost in a Row</td>
											<td class="pr-3 pl-3">
												${this.biggest.streak.loses
													? this.biggest.streak.loses
													: '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">
												Most Matches With a Draw in a Row
											</td>
											<td class="pr-3 pl-3">
												${this.biggest.streak.draws
													? this.biggest.streak.draws
													: '-'}
											</td>
										</tr>
								  `}
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
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="py-2 pl-3">Home</td>
											<td class="pl-3 text-center">
												${this.fixtures.wins.home
													? this.fixtures.wins.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.draws.home
													? this.fixtures.draws.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.loses.home
													? this.fixtures.loses.home
													: '-'}
											</td>
											<td class="pr-3 pl-3 text-center">
												${this.fixtures.played.home
													? this.fixtures.played.home
													: '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Away</td>
											<td class="pl-3 text-center">
												${this.fixtures.wins.away
													? this.fixtures.wins.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.draws.away
													? this.fixtures.draws.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.loses.away
													? this.fixtures.loses.away
													: '-'}
											</td>
											<td class="pr-3 pl-3 text-center">
												${this.fixtures.played.away
													? this.fixtures.played.away
													: '-'}
											</td>
										</tr>
								  `}
						</tbody>
						<tfoot class="bg-gray-800 text-xs">
							${this.loading
								? html`<tr class="border-t">
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr class="border-t">
											<td class="py-2 pl-3">Total</td>
											<td class="pl-3 text-center">
												${this.fixtures.wins.total
													? this.fixtures.wins.total
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.draws.total
													? this.fixtures.draws.total
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.fixtures.loses.total
													? this.fixtures.loses.total
													: '-'}
											</td>
											<td class="pr-3 pl-3 text-center">
												${this.fixtures.played.total
													? this.fixtures.played.total
													: '-'}
											</td>
										</tr>
								  `}
						</tfoot>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Statistics</th>
								<th class="py-1 pl-3">Home</th>
								<th class="py-1 pl-3">Away</th>
								<th class="py-1 pl-3 pr-3">Total</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="py-2 pl-3">Matches Ended in a Clean Sheet</td>
											<td class="pl-3 text-center">
												${this.clean_sheet.home ? this.clean_sheet.home : '-'}
											</td>
											<td class="pl-3 text-center">
												${this.clean_sheet.away ? this.clean_sheet.away : '-'}
											</td>
											<td class="pl-3 text-center">
												${this.clean_sheet.total ? this.clean_sheet.total : '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Matches Failed to Score in</td>
											<td class="pl-3 text-center">
												${this.failed_to_score.home
													? this.failed_to_score.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.failed_to_score.away
													? this.failed_to_score.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.failed_to_score.total
													? this.failed_to_score.total
													: '-'}
											</td>
										</tr>
								  `}
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
								: this.lineups.map(
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
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Home</td>
											<td class="pl-3 text-center">
												${this.goals.for.total.home
													? this.goals.for.total.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.against.total.home
													? this.goals.against.total.home
													: '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Away</td>
											<td class="pl-3 text-center">
												${this.goals.for.total.away
													? this.goals.for.total.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.against.total.away
													? this.goals.against.total.away
													: '-'}
											</td>
										</tr>
								  `}
						</tbody>
						<tfoot class="border-t bg-gray-800 text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="py-2 pl-3">Total</td>
											<td class="pl-3 text-center">
												${this.goals.for.total.total
													? this.goals.for.total.total
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.against.total.total
													? this.goals.against.total.total
													: '-'}
											</td>
										</tr>
								  `}
						</tfoot>
					</table>

					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Goals at Minute</th>
								<th class="py-1 pl-3">Total (S)</th>
								<th class="py-1 pl-3">% (S)</th>
								<th class="py-1 pl-3">Total (R)</th>
								<th class="py-1 pl-3 pr-3">% (R)</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										${Object.keys(this.goals.for.minute).map(
											(minute, index) => html`
												<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
													<td class="py-2 pl-3">${minute}</td>
													<td class="pl-3 text-center">
														${this.goals.for.minute[minute].total
															? this.goals.for.minute[minute].total
															: '-'}
													</td>
													<td class="pl-3 text-center">
														${this.goals.for.minute[minute].percentage
															? this.goals.for.minute[minute].percentage
															: '-'}
													</td>
													<td class="pl-3 text-center">
														${this.goals.against.minute[minute].total
															? this.goals.against.minute[minute].total
															: '-'}
													</td>
													<td class="pl-3 pr-3 text-center">
														${this.goals.against.minute[minute].percentage
															? this.goals.against.minute[minute].percentage
															: '-'}
													</td>
												</tr>
											`
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
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="py-2 pl-3">Scored</td>
											<td class="pl-3 text-center">
												${this.goals.for.average.home
													? this.goals.for.average.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.for.average.away
													? this.goals.for.average.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.for.average.total
													? this.goals.for.average.total
													: '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Received</td>
											<td class="pl-3 text-center">
												${this.goals.against.average.home
													? this.goals.against.average.home
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.against.average.away
													? this.goals.against.average.away
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.goals.against.average.total
													? this.goals.against.average.total
													: '-'}
											</td>
										</tr>
								  `}
						</tbody>
					</table>
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">Penalties</th>
								<th class="py-1 pl-3">Scored</th>
								<th class="py-1 pl-3 pr-3">Percentage</th>
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="py-2 pl-3">Missed</td>
											<td class="pl-3 text-center">
												${this.penalty.missed.total
													? this.penalty.missed.total
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.penalty.missed.percentage
													? this.penalty.missed.percentage
													: '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Scored</td>
											<td class="pl-3 text-center">
												${this.penalty.scored.total
													? this.penalty.scored.total
													: '-'}
											</td>
											<td class="pl-3 text-center">
												${this.penalty.scored.percentage
													? this.penalty.scored.percentage
													: '-'}
											</td>
										</tr>
								  `}
						</tbody>
					</table>
				</div>
			</div>
		`;
	}
}

customElements.define('team-statistics', TeamStatistics);
