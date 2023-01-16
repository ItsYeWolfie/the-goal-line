import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../../lib/LitElement';
import { ITeamStatistics } from '../../../types/Team.types';

@customElement('t-overview-statistics')
export class TeamFixtures extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property() fixtures = {} as ITeamStatistics['fixtures'];

	@property({ type: Object }) clean_sheet = {} as ITeamStatistics['clean_sheet'];

	@property({ type: Object }) failed_to_score = {} as ITeamStatistics['failed_to_score'];

	public connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html` <table class="w-full bg-gray-700">
			<thead class="bg-gray-800 text-sm uppercase">
				<tr>
					<th class="py-1 pl-3 text-left">Statistics</th>
					<th class="py-1 pl-3">Home</th>
					<th class="py-1 pl-3">Away</th>
					<th class="py-1 pl-3 pr-3">Total</th>
				</tr>
			</thead>
			<tbody class="text-xs">
				<tr>
					<td class="py-2 pl-3">Matches With a Clean Sheet</td>
					<td class="pl-3 text-center">${this.loading ? '...' : this.clean_sheet.home || '-'}</td>
					<td class="pl-3 text-center">${this.loading ? '...' : this.clean_sheet.away || '-'}</td>
					<td class="pl-3 text-center">${this.loading ? '...' : this.clean_sheet.total || '-'}</td>
				</tr>
				<tr class="bg-gray-600">
					<td class="py-2 pl-3">Matches Without Scoring</td>
					<td class="pl-3 text-center">
						${this.loading ? '...' : this.failed_to_score.home || '-'}
					</td>
					<td class="pl-3 text-center">
						${this.loading ? '...' : this.failed_to_score.away || '-'}
					</td>
					<td class="pl-3 text-center">
						${this.loading ? '...' : this.failed_to_score.total || '-'}
					</td>
				</tr>
			</tbody>
		</table>`;
	}
}

export default TeamFixtures;
