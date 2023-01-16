import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../../lib/LitElement';
import { ITeamStatistics } from '../../../types/Team.types';

@customElement('t-overview-lineups')
export class TeamLineups extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property({ type: Object }) lineups = {} as ITeamStatistics['lineups'];

	public connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html` <table class="w-full bg-gray-700 uppercase">
			<thead class="bg-gray-800 text-sm">
				<tr>
					<th class="py-1 pl-3 text-left">Formation Lineup</th>
					<th class="py-1 pl-3 pr-3 text-left">Played</th>
				</tr>
			</thead>
			<tbody class="text-xs">
				${this.loading
					? html` <tr>
							<td class="py-2 pl-3" colspan="100">Loading...</td>
					  </tr>`
					: this.lineups.map(
							(lineup, index) => html`
								<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
									<td class="w-56 py-2 pl-3">${lineup.formation}</td>
									<td class="pl-3 text-left">${lineup.played}</td>
								</tr>
							`
					  )}
			</tbody>
		</table>`;
	}
}

export default TeamLineups;
