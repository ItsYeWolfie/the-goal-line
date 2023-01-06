import { html } from 'lit';
import moment from 'moment/moment';
import { LitLightElement } from '../../lib/LitElement';

class TeamFixturesTable extends LitLightElement {
	static properties = {
		headers: {},
		loading: {},
		teamID: { type: Number },
	};

	constructor() {
		super();
		this.headers = 'Team,League,Season,Stage,Date,Status,Result';
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
			<table class="min-w-full divide-y divide-gray-300 h-96">
				<thead class="uppercase text-xs">
					<tr>
						${this.headers.map(
							(header) => html`
								<th
									scope="col"
									class="${this.headers.indexOf(header) === 0
										? 'pl-4 pr-3 sm:pl-6'
										: 'px-3 py-3.5'}
										text-left font-semibold text-gray-900 lg:table-cell"
								>
									${header}
								</th>
							`
						)}
					</tr>
				</thead>
				<tbody>
					${this.loading
						? html`
								<tr class>
									<td colspan="${this.headers.length}" class="py-4 text-center">
										Loading... <span class="animate-spin">⚽</span>
									</td>
								</tr>
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
									return html` <tr class="border-b divide-x">
										<td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
											<div class="font-medium text-gray-900">
												${isHome ? away.name : home.name}
											</div>
											<div
												class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden"
											></div>
										</td>
										<td
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
										</td>
										<td
											class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										>
											${league.season}
										</td>
										<td
											class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
										>
											${league.round}
										</td>
										<td
											class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
											id="fixture-date"
										>
											${date}
										</td>
										<td
											class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
										>
											${isHome ? 'Home' : 'Away'}
										</td>
										<td
											class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
										>
											${status.short}
											${isWinner
												? html`<i class="fas fa-trophy">
														<span class="sr-only">Winner</span>
												  </i>`
												: ''}
										</td>
										<td
											class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
										>
											${goals.home} - ${goals.away}
										</td>
									</tr>`;
								})}
						  `}
				</tbody>
			</table>
		`;
	}
}

customElements.define('t-fixtures-table', TeamFixturesTable);
