import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Standings extends LitLightElement {
	static properties = {
		standings: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.standings = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/9755c43d23971a73fe3f');
		const data = await response.json();
		this.standings = data;
		this.loading = false;
		// console.log(data);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}
		return html`
			<div class="h-auto w-full rounded-md bg-gray-800 p-2 lg:h-auto">
				<table
					class="mx-auto table rounded-t-md border-[0.5px] border-solid border-gray-400 border-opacity-30 p-2"
				>
					<thead class="table-row-group h-9 p-1">
						<tr
							class="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30"
						>
							<th>#</th>
							<th class="pl-2 text-left">Team</th>
							<th class="w-9 text-center">
								<span>P</span>
							</th>
							<th class="w-9 text-center">
								<span>GD</span>
							</th>
							<th class="w-9 text-center">
								<span>PTS</span>
							</th>
						</tr>
					</thead>
					<tbody class="table-row-group">
						${this.standings.standings.flat().map(
							(standing) =>
								html` <tr
									class="relative h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30"
								>
									<td class="relative items-center pl-1 text-center text-sm">
										${this.standings.standings.flat().slice(0, 4).includes(standing)
											? html`<span
													class="absolute top-7 -ml-2 w-7 rounded-t-md border-b-4 border-blue-500"
											  ></span>`
											: ''}
										${standing === this.standings.standings.flat()[4]
											? html`<span
													class="absolute top-7 -ml-2 w-7 rounded-t-md border-b-4 border-orange-500"
											  ></span>`
											: ''}
										${this.standings.standings.flat().slice(-3).includes(standing)
											? html`<span
													class="absolute top-7 -ml-1 w-7 rounded-t-md border-b-4 border-red-700"
											  ></span>`
											: ''}
										<span class="pl-1 text-center text-sm">${standing.rank}</span>
									</td>
									<td class="w-60 pl-2 text-sm">
										<span class="flex"
											><img src="${standing.team.logo}" width="20px" />
											<p class="pl-1">${standing.team.name}</p></span
										>
									</td>
									<td class="w-9 pl-1 text-center text-sm">${standing.all.played}</td>
									<td class="w-9 pl-1 text-center text-sm">${standing.goalsDiff}</td>
									<td class="w-9 pl-1 text-center text-sm">${standing.points}</td>
								</tr>`
						)}
					</tbody>
				</table>

				${!this.loading &&
				html`
			<div class="mt-4 ml-4 md:ml-36 lg:ml-1 text-[11px]">
				<div class="flex"><div class="rounded-full bg-blue-500 mt-0.5 mr-2 w-3 h-3 relative"></div>
					Champions League
				</div>
			</div>
			<div class="mt-2 ml-4 md:ml-36 lg:ml-1 text-[11px]">
				<div class="flex"><div class="rounded-full bg-orange-500 mt-0.5 mr-2 w-3 h-3 relative"></div>
					Europa League
				</div>
			</div>
			<div class="mt-2 ml-4 md:ml-36 lg:ml-1 text-[11px]">
				<div class="flex"><div class="rounded-full bg-red-700 mt-0.5 mr-2 w-3 h-3 relative"></div>
					Relegation
				</div>
			</div>
			</div>`}
			</div>
		`;
	}
}
customElements.define('standings-f', Standings);
