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
		console.log(Object.keys(this));
		console.log('Form', this.form);
		console.log('Team', this.team);
		console.log('Cards', this.cards);
		console.log('Goals', this.goals);
		console.log('league', this.league);
		console.log('Lineups', this.lineups);
		console.log('penalty', this.penalty);
		console.log('Fixtures', this.fixtures);
		console.log('Clean sheet', this.clean_sheet);
		console.log('Failed to score', this.failed_to_score);
	}

	render() {
		return html`
			<div class="flex flex-wrap">
				<table class="basis-6/12 bg-gray-700 text-sm">
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
										<td class="py-2 pl-3">Biggest win (Home)</td>
										<td class="pr-3 pl-3">
											${this.biggest.wins.home ? this.biggest.wins.home : '-'}
										</td>
									</tr>
									<tr class="bg-gray-600">
										<td class="py-2 pl-3">Biggest win (Away)</td>
										<td class="pr-3 pl-3">
											${this.biggest.wins.away ? this.biggest.wins.away : '-'}
										</td>
									</tr>
									<tr>
										<td class="py-2 pl-3">Biggest loss (Home)</td>
										<td class="pr-3 pl-3">
											${this.biggest.loses?.home
												? this.biggest.loses.home
												: '-'}
										</td>
									</tr>

									<tr class="bg-gray-600">
										<td class="py-2 pl-3">Biggest loss (Away)</td>
										<td class="pr-3 pl-3">
											${this.biggest.loses.away ? this.biggest.loses.away : '-'}
										</td>
									</tr>
									<tr>
										<td class="py-2 pl-3">Longest Streak (Wins)</td>
										<td class="pr-3 pl-3">
											${this.biggest.streak.wins
												? this.biggest.streak.wins
												: '-'}
										</td>
									</tr>
									<tr class="bg-gray-600">
										<td class="py-2 pl-3">Longest Streak (Loses)</td>
										<td class="pr-3 pl-3">
											${this.biggest.streak.loses
												? this.biggest.streak.loses
												: '-'}
										</td>
									</tr>
									<tr>
										<td class="py-2 pl-3">Longest Streak (Draws)</td>
										<td class="pr-3 pl-3">
											${this.biggest.streak.draws
												? this.biggest.streak.draws
												: '-'}
										</td>
									</tr>
							  `}
					</tbody>
				</table>
			</div>
		`;
	}
}

customElements.define('team-statistics', TeamStatistics);
