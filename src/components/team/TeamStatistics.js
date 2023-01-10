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
		console.log('Goals', this.goals);
		console.log('league', this.league);
		console.log('Lineups', this.lineups);
		console.log('penalty', this.penalty);
		console.log('Clean sheet', this.clean_sheet);
		console.log('Failed to score', this.failed_to_score);
	}

	render() {
		return html`
			<div class="flex items-start justify-start gap-4">
				<div class="flex flex-shrink-0 flex-grow-0 basis-4/12 flex-col">
					<table class="bg-gray-700 text-sm">
						<thead class="bg-gray-800">
							<tr>
								<th class="py-1 pl-3 text-left uppercase" colspan="100%">
									Results
								</th>
							</tr>
						</thead>

						<tbody class="divide-y divide-gray-500">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3 pr-3">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="w-56 py-2 pl-3">Most goals scored (Home)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.goals.for.home}
											</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Most goals scored (Away)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.goals.for.away}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Most goals conceded (Home)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.goals.against.home}
											</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Most goals conceded (Away)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.goals.against.away}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Biggest win (Home)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.wins.home ? this.biggest.wins.home : '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Biggest win (Away)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.wins.away ? this.biggest.wins.away : '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Biggest loss (Home)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.loses?.home
													? this.biggest.loses.home
													: '-'}
											</td>
										</tr>

										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Biggest loss (Away)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.loses.away
													? this.biggest.loses.away
													: '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Longest Streak (Wins)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.streak.wins
													? this.biggest.streak.wins
													: '-'}
											</td>
										</tr>
										<tr class="bg-gray-600">
											<td class="py-2 pl-3">Longest Streak (Loses)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.streak.loses
													? this.biggest.streak.loses
													: '-'}
											</td>
										</tr>
										<tr>
											<td class="py-2 pl-3">Longest Streak (Draws)</td>
											<td class="pr-3 pl-3 text-right">
												${this.biggest.streak.draws
													? this.biggest.streak.draws
													: '-'}
											</td>
										</tr>
								  `}
						</tbody>
					</table>
				</div>
				<div class="flex flex-shrink-0 flex-grow-0 basis-4/12 flex-col">
					<table class="bg-gray-700 text-sm uppercase">
						<thead class="bg-gray-800">
							<tr>
								<th class="py-1 pl-3 text-left">Fixtures</th>
								<th class="py-1 pl-3 text-center">Wins</th>
								<th class="py-1 pl-3 text-left">Draws</th>
								<th class="py-1 pl-3 text-left">Loses</th>
								<th class="py-1 pl-3 pr-3 text-left">Total</th>
							</tr>
						</thead>
						<tbody>
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr>
											<td class="w-48 py-2 pl-3">Home</td>
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
											<td class="w-48 py-2 pl-3">Away</td>
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
						<tfoot class="bg-gray-800">
							${this.loading
								? html`<tr class="border-t">
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: html`
										<tr class="border-t">
											<td class="w-48 py-2 pl-3">Total</td>
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
				</div>
				<div class="flex flex-shrink-0 flex-grow-0 basis-4/12 flex-col"></div>
			</div>
		`;
	}
}

customElements.define('team-statistics', TeamStatistics);
