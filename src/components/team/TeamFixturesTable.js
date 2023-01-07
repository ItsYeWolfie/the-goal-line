import { html } from 'lit';
import moment from 'moment/moment';
import { LitLightElement } from '../../lib/LitElement';
import StickyBackgroundTable from '../tables/StickyBackgroundTable';

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
		return new Promise(async (resolve, reject) => {
			await fetch('https://api.npoint.io/3d56ae8265c24b49d6f8')
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
			'h-[40rem]',
			'overflow-y-auto',
			'bg-white',
			'shadow-md',
			'rounded-md',
			'min-w-full',
			'divide-y'
		);
		this.headers = this.headers.split(',');
		this.fixtures = await this.fetchFixtures();
	}

	render() {
		return html`
			<sticky-background-table
				headers="Versus,League,Season,Round,Time/Date,Side,Status,Score"
			>
				${this.loading
					? html`
							<div class="table-row">
								<div class="py-4 text-center table-cell align-middle w-full">
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
								const { timestamp } = match;
								const date = moment.unix(timestamp).format('LL');
								return html` <div class="border-b table-row">
									<div class="py-4 pl-4 sm:pl-6 pr-3 text-sm table-cell">
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
										<div class="flex gap-2 items-center">
											<img
												src="${league.logo}"
												alt="${league.name} logo"
												class="w-6 h-6 inline-block"
											/><span>${league.name}</span>
											${league.flag &&
											html`<img
												src=${league.flag}
												alt="${league.country} flag"
												class="w-4 h-4 inline-block"
											/>`}
										</div>
									</div>
									<div
										class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
									>
										${league.season}
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
										${date}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
									>
										${isHome ? 'Home' : 'Away'}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
									>
										${status.short}
										${isWinner
											? html`<i class="fas fa-trophy">
													<span class="sr-only">Winner</span>
											  </i>`
											: ''}
									</div>
									<div
										class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
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
