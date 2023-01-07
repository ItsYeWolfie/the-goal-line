import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class TeamInfoRow extends LitLightElement {
	static properties = {
		key: { type: String },
		value: { type: String },
	};

	render() {
		return html`
			<div class="mt-2">
				<p class="font-medium">${this.value}</p>
				<p class="text-gray-500 -mt-1 text-sm">${this.key}</p>
			</div>
		`;
	}
}

customElements.define('t-info-row', TeamInfoRow);
