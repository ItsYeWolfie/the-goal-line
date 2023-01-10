import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

export class StatisticRow extends LitLightElement {
	static properties = {
		header: {},
		value: {},
		even: {},
	};

	render() {
		return html`
			<tr${this.even ? 'class="bg-gray-600"' : ''}>
				<td class="${this.classList} py-2 pl-3">${this.header}</td>
				<td class="pr-3 pl-3">${this.value}</td>
			</tr>
		`;
	}
}

customElements.define('statistic-row', StatisticRow);
