import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class FixtureRow extends LitLightElement {
	static properties = {};

	connectedCallback() {
		super.connectedCallback();
		console.log(this);
	}

	render() {
		return html`
			<td class="relative py-4 pl-4 sm:pl-6 pr-3 text-sm">
				<div class="font-medium text-gray-900">Burnley</div>
				<div class="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
					<span>4 GB RAM / 4 CPUs</span>
					<span class="hidden sm:inline">·</span>
					<span>128 GB SSD disk</span>
				</div>
			</td>
			<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
				<div class="flex gap-2 items-center">
					<img
						src="https://media.api-sports.io/football/leagues/39.png"
						alt="Premier League"
						class="w-6 h-6 inline-block"
					/><span>Premier League</span>
					<img
						src="https://media.api-sports.io/flags/gb.svg"
						alt="England Flag"
						class="w-4 h-4 inline-block"
					/>
				</div>
			</td>
			<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
				2020 - 2021
			</td>
			<td class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell">
				Regular Season - 1
			</td>
			<td
				class="hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell"
				id="fixture-date"
			>
				1610482500
			</td>
			<td
				class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
			>
				Away
			</td>
			<td
				class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
			>
				FT - 90'
			</td>
			<td
				class="hidden px-3 py-3.5 text-xs text-gray-500 lg:table-cell uppercase"
			>
				0 - 1
			</td>
		`;
	}
}

customElements.define('g-fixture-row', FixtureRow);
