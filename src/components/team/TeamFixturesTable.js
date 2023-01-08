import { html } from 'lit';
import moment from 'moment/moment';
import { LitLightElement } from '../../lib/LitElement';
import '../tables/StickyBackgroundTable';

class TeamFixturesTable extends LitLightElement {
	static properties = {
		headers: {},
		loading: {},
		teamID: { type: Number },
	};

	constructor() {
		super();
		this.loading = true;
	}

	fetchFixtures = async () => {
		return new Promise((resolve, reject) => {
			fetch('https://api.npoint.io/3d56ae8265c24b49d6f8')
				.then((response) => response.json())
				.then((data) => {
					return resolve(data);
				})
				.finally(() => {
					this.loading = false;
				})
				.catch((error) => {
					return reject(error);
				});
		});
	};

	async connectedCallback() {
		super.connectedCallback();
		this.classList.add(
			'overflow-y-auto',
			'bg-white',
			'shadow-md',
			'rounded-md',
			'divide-y'
		);
		this.headers = this.headers.split(',');
		this.fixtures = await this.fetchFixtures();
	}

	render() {
		return html`
			<sticky-background-table
				class="h-96"
				headers="Versus,Round,Date,Side,Status,Score"
			>
				${this.loading
					? html`
							<div class="table-row">
								<div class="table-cell w-full py-4 text-center align-middle">
									Loading... <span class="animate-spin">⚽</span>
								</div>
							</div>
					  `
					: html`
							${this.fixtures.map((fixture) => {
								const { fixture: match, goals, league, teams } = fixture;
								const { home, away } = teams;
								const isHome = home.id === this.teamID;
								const isWinner =
									(isHome && goals.home > goals.away) ||
									(!isHome && goals.away > goals.home);

								const { status } = match;
								const { date } = match;
								const formattedDate = moment(date).format('DD.MM.YYYY');
								return html` <div class="table-row border-b">
									<div class="table-cell py-4 pl-4 pr-3 text-sm sm:pl-6">
										<div class="font-medium text-gray-900">
											${isHome ? away.name : home.name}
										</div>
										<div
											class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden"
										></div>
									</div>
									<div
										class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
									>
										${league.round}
									</div>
									<div
										class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										id="fixture-date"
									>
										${formattedDate}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs uppercase text-gray-500 lg:table-cell"
									>
										${isHome ? 'Home' : 'Away'}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs uppercase text-gray-500 lg:table-cell"
									>
										${status.short}
										${isWinner
											? html`<i class="fas fa-trophy">
													<span class="sr-only">Winner</span>
											  </i>`
											: ''}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs uppercase text-gray-500 lg:table-cell"
									>
										${goals.home} - ${goals.away}
									</div>
								</div>`;
							})}
					  `}
			</sticky-background-table>
		`;
	}
}

customElements.define('t-fixtures-table', TeamFixturesTable);
