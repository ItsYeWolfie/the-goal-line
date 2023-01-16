import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../../lib/LitElement';
import { ITeamStatistics } from '../../../types/Team.types';
import { RenderLoadingCells } from '../../tables/LoadingCell';

@customElement('t-overview-fixtures')
export class TeamFixtures extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property() fixtures = {} as ITeamStatistics['fixtures'];

	public connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<table class="w-full bg-gray-700 uppercase">
				<thead class="bg-gray-800 text-sm">
					<tr>
						<th class="py-1 pl-3 text-left">Fixtures</th>
						<th class="py-1 pl-3">Wins</th>
						<th class="py-1 pl-3">Draws</th>
						<th class="py-1 pl-3">Loses</th>
						<th class="py-1 pl-3 pr-3">Played</th>
					</tr>
				</thead>

				<tbody class="text-xs">
					<tr>
						<td class="py-2 pl-3">Home</td>
						${this.loading
							? RenderLoadingCells(4, 'center')
							: html`
									<td class="pl-3 text-center">${this.fixtures.wins.home || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.draws.home || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.loses.home || '-'}</td>
									<td class="pr-3 pl-3 text-center">${this.fixtures.played.home || '-'}</td>
							  `}
					</tr>
					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Away</td>
						${this.loading
							? RenderLoadingCells(4, 'center')
							: html`
									<td class="pl-3 text-center">${this.fixtures.wins.away || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.draws.away || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.loses.away || '-'}</td>
									<td class="pr-3 pl-3 text-center">${this.fixtures.played.away || '-'}</td>
							  `}
					</tr>
				</tbody>
				<tfoot class="bg-gray-800 text-xs">
					<tr class="border-t">
						<td class="py-2 pl-3">Total</td>
						${this.loading
							? RenderLoadingCells(4, 'center')
							: html`
									<td class="pl-3 text-center">${this.fixtures.wins.total || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.draws.total || '-'}</td>
									<td class="pl-3 text-center">${this.fixtures.loses.total || '-'}</td>
									<td class="pr-3 pl-3 text-center">${this.fixtures.played.total || '-'}</td>
							  `}
					</tr>
				</tfoot>
			</table>
		`;
	}
}

export default TeamFixtures;
