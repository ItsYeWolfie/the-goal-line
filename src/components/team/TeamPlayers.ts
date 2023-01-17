import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';
import { IPlayerWithStatistics } from '../../types/Player.types';
import { ILeagueWithSeason } from '../../types/League.types';
import './team-players/TeamPlayersTable';

@customElement('team-players')
class TeamPlayers extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property({ type: Array }) players: IPlayerWithStatistics[] = [];

	@property({ type: Number }) activeLeagueId = -1;

	leagues: ILeagueWithSeason[] = [];

	goalkeepers: IPlayerWithStatistics[] = [];

	defenders: IPlayerWithStatistics[] = [];

	midfielders: IPlayerWithStatistics[] = [];

	forwards: IPlayerWithStatistics[] = [];

	async connectedCallback() {
		super.connectedCallback();
		this.players = await fetchData<IPlayerWithStatistics[]>(
			'https://api.npoint.io/14ad36c662462a142566'
		);
		this.loading = false;

		this.goalkeepers = this.players.filter(
			(player) => player.statistics[0].games.position === 'Goalkeeper'
		);

		this.defenders = this.players.filter(
			(player) => player.statistics[0].games.position === 'Defender'
		);

		this.midfielders = this.players.filter(
			(player) => player.statistics[0].games.position === 'Midfielder'
		);

		this.forwards = this.players.filter(
			(player) => player.statistics[0].games.position === 'Attacker'
		);

		this.players.map((player) =>
			player.statistics.forEach((stat) => this.leagues.push(stat.league))
		);

		this.leagues = this.leagues.filter(
			(league, index, self) => index === self.findIndex((l) => l.id === league.id)
		);

		console.log(this.goalkeepers);
		this.activeLeagueId = this.leagues[0].id;
	}

	handleLeagueChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		this.activeLeagueId = parseInt(target.value, 10);
	}

	render() {
		if (this.loading) {
			return html`<p>Loading...</p>`;
		}

		return html`
			<div class="sticky top-0 z-10 mb-8 bg-gray-800 p-4">
				<label class="mb-1 block text-sm font-medium text-gray-100" for="league">League</label>
				<select class="bg-gray-800" name="league" @change="${this.handleLeagueChange}">
					${this.leagues.map(
						(league) => html`<option
							value="${league.id}"
							?selected="${this.activeLeagueId === league.id}"
						>
							${league.name}
						</option>`
					)}
				</select>
			</div>
			<team-players-table
				title="Goalkeepers"
				.players="${this.goalkeepers}"
				.activeLeagueId="${this.activeLeagueId}"
				.loading="${this.loading}"
			></team-players-table>
			<team-players-table
				title="Defenders"
				.players="${this.defenders}"
				.activeLeagueId="${this.activeLeagueId}"
				.loading="${this.loading}"
			></team-players-table>
			<team-players-table
				title="Midfielders"
				.players="${this.midfielders}"
				.activeLeagueId="${this.activeLeagueId}"
				.loading="${this.loading}"
			></team-players-table>

			<team-players-table
				title="Forwards"
				.players="${this.forwards}"
				.activeLeagueId="${this.activeLeagueId}"
				.loading="${this.loading}"
			></team-players-table>
		`;
	}
}

export default TeamPlayers;
