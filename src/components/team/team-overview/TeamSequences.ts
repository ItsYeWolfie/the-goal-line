import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../../lib/LitElement';
import { ITeamStatistics } from '../../../types/Team.types';
import { RenderLoadingCells } from '../../tables/LoadingCell';

@customElement('t-overview-sequences')
export class TeamSequences extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	@property() biggest = {} as ITeamStatistics['biggest'];

	public connectedCallback() {
		super.connectedCallback();
	}

	render() {
		if (this.loading) {
			return html`
				<table class="w-full bg-gray-700">
					<thead class="bg-gray-800">
						<tr>
							<th class="py-1 pl-3 text-left uppercase" colspan="100">Sequences</th>
						</tr>
					</thead>

					<tbody class="divide-y divide-gray-500 text-xs">
						<tr>
							<td class="w-56 py-2 pl-3">Most goals scored (Home)</td>
							${RenderLoadingCells(1)}
						</tr>

						<tr class="bg-gray-600">
							<td class="py-2 pl-3">Most goals scored (Away)</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr>
							<td class="py-2 pl-3">Most goals conceded (Home)</td>
							${RenderLoadingCells(1)}
						</tr>

						<tr class="bg-gray-600">
							<td class="py-2 pl-3">Most goals conceded (Away)</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr>
							<td class="py-2 pl-3">Biggest Win (Home)</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr class="bg-gray-600">
							<td class="py-2 pl-3">Biggest Win (Away)</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr>
							<td class="py-2 pl-3">Biggest Loss (Home)</td>
							${RenderLoadingCells(1)}
						</tr>

						<tr class="bg-gray-600">
							<td class="py-2 pl-3">Biggest Loss (Away)</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr>
							<td class="py-2 pl-3">Most Matches Won in a Row</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr class="bg-gray-600">
							<td class="py-2 pl-3">Most Matches Lost in a Row</td>
							${RenderLoadingCells(1)}
						</tr>
						<tr>
							<td class="py-2 pl-3">Most Matches With a Draw in a Row</td>
							${RenderLoadingCells(1)}
						</tr>
					</tbody>
				</table>
			`;
		}
		return html`
			<table class="w-full bg-gray-700">
				<thead class="bg-gray-800">
					<tr>
						<th class="py-1 pl-3 text-left uppercase" colspan="100">Sequences</th>
					</tr>
				</thead>

				<tbody class="divide-y divide-gray-500 text-xs">
					<tr>
						<td class="w-56 py-2 pl-3">Most goals scored (Home)</td>
						<td class="pr-3 pl-3">${this.biggest.goals.for.home || '-'}</td>
					</tr>

					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Most goals scored (Away)</td>
						<td class="pr-3 pl-3">${this.biggest.goals.for.away || '-'}</td>
					</tr>
					<tr>
						<td class="py-2 pl-3">Most goals conceded (Home)</td>
						<td class="pr-3 pl-3">${this.biggest.goals.against.home || '-'}</td>
					</tr>

					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Most goals conceded (Away)</td>
						<td class="pr-3 pl-3">${this.biggest.goals.against.away || '-'}</td>
					</tr>
					<tr>
						<td class="py-2 pl-3">Biggest Win (Home)</td>
						<td class="pr-3 pl-3">${this.biggest.wins.home || '-'}</td>
					</tr>
					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Biggest Win (Away)</td>
						<td class="pr-3 pl-3">${this.biggest.wins.away || '-'}</td>
					</tr>
					<tr>
						<td class="py-2 pl-3">Biggest Loss (Home)</td>
						<td class="pr-3 pl-3">${this.biggest.loses.home || '-'}</td>
					</tr>

					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Biggest Loss (Away)</td>
						<td class="pr-3 pl-3">${this.biggest.loses.away || '-'}</td>
					</tr>
					<tr>
						<td class="py-2 pl-3">Most Matches Won in a Row</td>
						<td class="pr-3 pl-3">${this.biggest.streak.wins || '-'}</td>
					</tr>
					<tr class="bg-gray-600">
						<td class="py-2 pl-3">Most Matches Lost in a Row</td>
						<td class="pr-3 pl-3">${this.biggest.streak.loses || '-'}</td>
					</tr>
					<tr>
						<td class="py-2 pl-3">Most Matches With a Draw in a Row</td>
						<td class="pr-3 pl-3">${this.biggest.streak.draws || '-'}</td>
					</tr>
				</tbody>
			</table>
		`;
	}
}

export default TeamSequences;
