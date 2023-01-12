import { html } from 'lit';
import moment from 'moment/moment';
import { customElement, property } from 'lit/decorators.js';
import { LeagueInfo, Fixture } from './TeamTypes';
import { LitLightElement } from '../../lib/LitElement';
import '../tables/StickyBackgroundTable';
import { fetchData } from '../../lib/helpers/Fetch';

@customElement('t-fixtures-table')
class TeamFixturesTable extends LitLightElement {
	@property({ type: Boolean }) loading: boolean = true;

	@property({ type: Array }) headers: string = '';

	@property({ type: Number }) teamID: number = 0;

	@property() fixtures: Fixture[] = [];

	@property() filteredFixtures: Fixture[] = [];

	leagues: LeagueInfo[] = [];

	selectedLeague: number = 0;

	selectedSeason: number = 0;

	async connectedCallback() {
		super.connectedCallback();
		this.fixtures = await fetchData(
			'https://api.npoint.io/3d56ae8265c24b49d6f8'
		);
		this.loading = false;

		this.leagues = this.fixtures.map((fixture: Fixture) => {
			const { league } = fixture;
			return league;
		});

		this.leagues = this.leagues.filter((league, index, self) => {
			return self.findIndex((l) => l.id === league.id) === index;
		});
		this.leagues.sort((a, b) => {
			return a.name > b.name ? 1 : -1;
		});
		this.selectedLeague = -1;
		this.selectedSeason = Number(this.leagues[0].season);
		this.filteredFixtures = this.filterFixtures();
	}

	filterFixtures() {
		return this.fixtures.filter((fixture) => {
			if (this.selectedLeague === -1) return true;
			return fixture.league.id === this.selectedLeague;
		});
	}

	render() {
		return html`
			<div class="align-center mb-8 flex items-center justify-between">
				<div class="flex items-center gap-4">
					<div>
						<label class="mb-1 block text-sm font-medium text-gray-100"
							>Select League</label
						>
						<select
							class="bg-gray-800"
							@change="${(e: Event) => {
								if (this.loading) return;
								const target = e.target as HTMLSelectElement;
								this.selectedLeague = Number(target.value);
								this.filteredFixtures = this.filterFixtures();
							}}"
						>
							<option value="${-1}">None</option>

							${!this.loading &&
							this.leagues.map((league) => {
								return html`
									<option value="${league.id}">${league.name}</option>
								`;
							})}
						</select>
					</div>
				</div>
				${this.selectedLeague !== -1 && !this.loading
					? html`
							<div class="rounded-md bg-gray-800 p-4 text-center text-white">
								${this.leagues
									.filter((league) => {
										return league.id === this.selectedLeague;
									})
									.map((league) => {
										return html`
											<div class="flex items-center justify-center">
												<img
													class="mr-2 h-6 w-6"
													src="${league.logo}"
													alt="${league.name}"
												/>
												<span class="flex items-center gap-1 text-lg font-bold">
													<span>${league.name}</span>
													${league.flag
														? html`<img
																class="object mr-2 h-4 w-4"
																src="${league.flag}"
																alt="${league.name}"
														  />`
														: ''}
													<span>-</span>
													<span>${league.season}</span>
												</span>
											</div>
										`;
									})}
							</div>
					  `
					: ''}
			</div>
			<sticky-background-table
				class="min-w-full"
				.headers=${['Opponent', 'Round', 'Date', 'Side', 'Status', 'Score']}
			>
				<div class="table-row-group divide-y divide-gray-500">
					${this.loading
						? html`
								<div class="table-row">
									<div class="table-cell w-full py-4 text-center align-middle">
										Loading... <span class="animate-spin">⚽</span>
									</div>
								</div>
						  `
						: html`
								${this.filteredFixtures.map((fixture, index) => {
									const { fixture: match, goals, league, teams } = fixture;
									const { home, away } = teams;
									const isHome = home.id === this.teamID;
									const isWinner = Object.values(teams).find(
										(team) => team.id === this.teamID && team.winner
									);

									const { status } = match;
									const { date } = match;
									const formattedDate = moment(date).format('DD.MM.YYYY');
									return html`
										<div
											class="${index % 2 === 1 ? 'bg-gray-600' : ''} table-row"
										>
											<div class="table-cell py-4 pl-4 pr-3 text-sm sm:pl-6">
												<div class="font-medium text-gray-200">
													${isHome ? away.name : home.name}
												</div>
												<div
													class="mt-1 flex flex-col text-gray-300 sm:block lg:hidden"
												></div>
											</div>
											<div
												class="hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell"
											>
												${league.round}
											</div>
											<div
												class="hidden px-3 py-3.5 text-sm text-gray-300 lg:table-cell"
												id="fixture-date"
											>
												${formattedDate}
											</div>
											<div
												class="hidden px-3 py-3.5 text-xs uppercase text-gray-300 lg:table-cell"
											>
												${isHome ? 'Home' : 'Away'}
											</div>
											<div
												class="hidden px-3 py-3.5 text-xs uppercase text-gray-300 lg:table-cell"
											>
												${status.short}
											</div>
											<div
												class="hidden px-3 py-3.5 text-xs uppercase text-gray-300 lg:table-cell"
											>
												${goals.home} -
												${goals.away}${isWinner
													? html`<i class="fas fa-trophy ml-2 text-green-500">
															<span class="sr-only">Winner</span>
													  </i>`
													: ''}
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

export default TeamFixturesTable;
