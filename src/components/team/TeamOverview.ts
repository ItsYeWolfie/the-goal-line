import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';
import '../tables/StickyBackgroundTable';
import { ITeam, ITeamStatistics } from '../../types/Team.types';
import './team-overview/TeamSequences';
import './team-overview/TeamFixtures';
import './team-overview/TeamStatistics';
import './team-overview/TeamLineups';
import { IVenue } from '../../types/Venue.types';

@customElement('team-overview')
class TeamStatistics extends LitLightElement {
	@property({ type: Number }) readonly teamID = 0;

	@property({ type: Boolean }) loading = true;

	@property() team = {} as ITeam;

	@property() venue = {} as IVenue;

	form = {} as ITeamStatistics['form'];

	league = {} as ITeamStatistics['league'];

	biggest = {} as ITeamStatistics['biggest'];

	fixtures = {} as ITeamStatistics['fixtures'];

	cards = {} as ITeamStatistics['cards'];

	penalty = {} as ITeamStatistics['penalty'];

	clean_sheet = {} as ITeamStatistics['clean_sheet'];

	failed_to_score = {} as ITeamStatistics['failed_to_score'];

	lineups = {} as ITeamStatistics['lineups'];

	goals = {} as ITeamStatistics['goals'];

	async connectedCallback() {
		super.connectedCallback();
		const team = await fetchData<ITeamStatistics>('https://api.npoint.io/259bb0faaedc5732aebe');
		this.loading = false;
		this.form = team.form;
		this.league = team.league;
		this.biggest = team.biggest;
		this.fixtures = team.fixtures;
		this.cards = team.cards;
		this.penalty = team.penalty;
		this.clean_sheet = team.clean_sheet;
		this.failed_to_score = team.failed_to_score;
		this.lineups = team.lineups;
		this.goals = team.goals;
	}

	render() {
		return html`
			<section class="mb-4">
				${this.loading
					? 'Loading...'
					: html`
							<div class="w-full md:flex md:space-x-2">
								<div class="relative rounded-md bg-gray-700 p-8 text-sm md:basis-6/12">
									<div class="flex flex-col">
										<header class="mb-4 uppercase text-sky-500">Club Details</header>
										<div class="mb-8 flex w-full flex-col gap-4 md:flex-row">
											<img
												class="my-auto h-24 w-24"
												src="${this.team.logo}"
												alt="${this.team.name} Logo"
											/>
											<div class="flex flex-col gap-4 sm:flex-row md:gap-2">
												<div>
													<span class="text-xs font-bold uppercase text-gray-400">Team Name</span>
													<header>${this.team.name}</header>
												</div>
												<div>
													<span class="text-xs font-bold uppercase text-gray-400">Founded</span>
													<header>${this.team.founded}</header>
												</div>
												<div>
													<span class="text-xs font-bold uppercase text-gray-400"
														>League Nation</span
													>
													<header>${this.team.country}</header>
												</div>
											</div>
											<div class="flex flex-col gap-4 sm:flex-row md:gap-2 md:place-self-end">
												<div>
													<span class="text-xs font-bold uppercase text-gray-400">Team Code</span>
													<header>${this.team.code}</header>
												</div>
												<div>
													<span class="text-xs font-bold uppercase text-gray-400"
														>National Team</span
													>
													${this.team.national
														? html`<i class="fas fa-check block text-xl text-green-500">
																<span class="sr-only">National Team</span>
														  </i>`
														: html` <i class="fas fa-times block text-xl text-red-500">
																<span class="sr-only">National Team</span>
														  </i>`}
												</div>
											</div>
										</div>
										<div class="mb-8 flex items-center space-x-16">
											<div class="flex items-center space-x-4">
												<img
													class="h-12 w-12"
													src="${this.league.logo}"
													alt="${this.league.name}"
												/>
												<div class="flex flex-col">
													<h1 class="font-bold">${this.league.name}</h1>
													<div class="flex items-center gap-2 text-sm">
														<img
															class="h-4 w-4"
															src="${this.league.flag}"
															alt="${this.league.country}'s flag"
														/>
														<h2 class="font-bold">${this.league.country}</h2>
													</div>
												</div>
											</div>
											<div class="md:text-center">
												<p class="text-sm font-bold">${this.league.season}</p>
												<p class="text-xs">Season</p>
											</div>
										</div>
										<div class="flex flex-col md:text-center">
											<p class="order-last">
												${this.form.split('').map((form) => {
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
														class="${color} order-[-1] ml-1 inline-block h-4 w-4 rounded-full text-xs font-bold text-white md:order-last"
													>
														<span class="sr-only">${form}</span>
													</span>`;
												})}
											</p>
											<p class="text-xs">Recent Form</p>
										</div>
									</div>
								</div>
								<div class="relative basis-6/12 rounded-md bg-gray-700 p-8">
									<header class="mb-4 uppercase text-sky-500">Stadium &rarr;</header>
									<img
										class="mx-auto h-40"
										src="${this.venue.image}"
										alt="${this.venue.name} Logo"
									/>
									<header class="text-center">${this.venue.name}</header>
									<div class="mb-4 flex justify-between text-sm uppercase sm:justify-around">
										<div class="text-left sm:text-center">
											<span class="text-xs font-bold uppercase text-gray-400">Capacity</span>
											<header>${this.venue.capacity}</header>
										</div>
										<div class="text-right sm:text-center">
											<span class="text-xs font-bold uppercase text-gray-400">City</span>
											<header>${this.venue.city}</header>
										</div>
									</div>
									<div
										class="mb-4 flex justify-between text-right text-sm uppercase sm:justify-evenly"
									>
										<div class="text-left sm:text-center">
											<span class="text-xs font-bold uppercase text-gray-400">Surface</span>
											<header>${this.venue.surface}</header>
										</div>
										<div class="text-right sm:text-center">
											<span class="text-xs font-bold uppercase text-gray-400">Address</span>
											<header>${this.venue.address}</header>
										</div>
									</div>
								</div>
							</div>
					  `}
			</section>
			<div class="grid grid-cols-12 md:space-x-4">
				<div class="col-span-12 flex flex-col space-y-4 md:col-span-6">
					<t-overview-sequences
						.loading=${this.loading}
						.biggest=${this.biggest}
					></t-overview-sequences>
					<t-overview-fixtures
						.loading=${this.loading}
						.fixtures=${this.fixtures}
					></t-overview-fixtures>
					<t-overview-statistics
						.loading=${this.loading}
						.failed_to_score=${this.failed_to_score}
						.clean_sheet=${this.clean_sheet}
					></t-overview-statistics>
					<t-overview-lineups
						.loading=${this.loading}
						.lineups=${this.lineups}
					></t-overview-lineups>
				</div>
				<div class="col-span-12 flex flex-col space-y-4 md:col-span-6">
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
								<td class="p-6 py-2 pl-3">Home</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.for.total.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.total.home || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Away</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.for.total.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.total.away || '-'}
								</td>
							</tr>
						</tbody>
						<tfoot class="border-t bg-gray-800 text-xs">
							<tr>
								<td class="py-2 pl-3">Total</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.for.total.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.total.total || '-'}
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
										${Object.keys(this.goals.for.minute).map((minute: string, index) => {
											return html`
												<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
													<td class="w-48 py-2 pl-3">${minute}</td>
													<td class="pl-3 text-center">
														${this.loading ? '...' : this.goals.for.minute[minute].total || '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading
															? '...'
															: this.goals.for.minute[minute].percentage || '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading ? '...' : this.goals.against.minute[minute].total || '-'}
													</td>
													<td class="pl-3 pr-3 text-center">
														${this.loading
															? '...'
															: this.goals.against.minute[minute].percentage || '-'}
													</td>
												</tr>
											`;
										})}
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
									${this.loading ? '...' : this.goals.for.average.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.for.average.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.for.average.total || '-'}
								</td>
							</tr>
							<tr class="bg-gray-600">
								<td class="py-2 pl-3">Received</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.average.home || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.average.away || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.goals.against.average.total || '-'}
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
									${this.loading ? '...' : this.penalty.scored.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.penalty.scored.percentage || '-'}
								</td>
							</tr>
							<tr>
								<td class="py-2 pl-3">Missed</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.penalty.missed.total || '-'}
								</td>
								<td class="pl-3 text-center">
									${this.loading ? '...' : this.penalty.missed.percentage || '-'}
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
										${Object.keys(this.cards.red).map(
											(minute: string, index) => html`
												<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
													<td class="w-48 py-2 pl-3">${minute}</td>
													<td class="pl-3 text-center">
														${this.loading ? '...' : this.cards.yellow[minute].total || '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading ? '...' : this.cards.yellow[minute].percentage || '-'}
													</td>
													<td class="pl-3 text-center">
														${this.loading ? '...' : this.cards.red[minute].total || '-'}
													</td>
													<td class="pl-3 pr-3 text-center">
														${this.loading ? '...' : this.cards.red[minute].percentage || '-'}
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
