import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../../lib/LitElement';
import { IPlayerWithStatistics } from '../../../types/Player.types';

@customElement('team-players-table')
export class TeamPlayersTable extends LitLightElement {
	@property({ type: String }) title = '';

	@property({ type: Array })
	players: IPlayerWithStatistics[] = [];

	@property({ type: Boolean }) loading = false;

	@property({ type: Number }) activeLeagueId = 0;

	render() {
		console.log('Players', this.players);
		return html`
			<header class="mb-2 text-xl font-medium text-gray-300">${this.title}</header>
			<ul class="mb-8 grid divide-y-2 divide-gray-600 rounded-md border border-gray-700 text-sm">
				<li class="grid grid-flow-col grid-cols-12 items-center bg-gray-800">
					<div class="col-span-7 py-2 pl-3">Name</div>
					<div class="col-span-1 text-center">Age</div>
					<div class="col-span-1 text-center">
						<i class="fa-solid fa-shirt">
							<span class="sr-only">Matches Played</span>
						</i>
					</div>
					<div class="col-span-1 text-center">
						<i class="fa-solid fa-futbol">
							<span class="sr-only">Goals</span>
						</i>
					</div>
					<div class="col-span-1 text-center">
						<i class="fa-solid fa-rug rotate-90 text-yellow-500">
							<span class="sr-only">Yellow Cards</span>
						</i>
					</div>
					<div class="col-span-1 text-center">
						<i class="fa-solid fa-rug rotate-90 text-red-500">
							<span class="sr-only">Red Cards</span>
						</i>
					</div>
				</li>
				${this.players.map((statistic, index) => {
					return html` <li
						class="${index % 2 === 1
							? 'bg-gray-600 '
							: 'bg-gray-700 '}grid grid-flow-col grid-cols-12 items-center"
					>
						<div class="col-span-7 py-2 pl-3">
							${statistic.player.firstname} ${statistic.player.lastname}
							${statistic.statistics
								.filter((stat) => stat.league.id === this.activeLeagueId)
								.map((stat) => stat.games.captain)
								.reduce((a, b) => a || b, false)
								? html`<i class="fa-solid fa-crown text-yellow-500">
										<span class="sr-only">Captain</span>
								  </i>`
								: ''}
						</div>
						<div class="col-span-1 text-center">${statistic.player.age}</div>

						<div class="col-span-1 text-center">
							${html`${statistic.statistics
								.filter((stat) => stat.league.id === this.activeLeagueId)
								.map((stat) => stat.games.appearences)
								.reduce((a, b) => a + b, 0)}`}
						</div>
						<div class="col-span-1 text-center">
							${html`${statistic.statistics
								.filter((stat) => stat.league.id === this.activeLeagueId)
								.map((stat) => stat.goals.total)
								.reduce((a, b) => a + b, 0)}`}
						</div>
						<div class="col-span-1 text-center">
							${html`${statistic.statistics
								.filter((stat) => stat.league.id === this.activeLeagueId)
								.map((stat) => stat.cards.yellow)
								.reduce((a, b) => a + b, 0)}`}
						</div>
						<div class="col-span-1 text-center">
							${html`${statistic.statistics
								.filter((stat) => stat.league.id === this.activeLeagueId)
								.map((stat) => stat.cards.red)
								.reduce((a, b) => a + b, 0)}`}
						</div>
					</li>`;
				})}
			</ul>
		`;
	}
}

export default TeamPlayersTable;
