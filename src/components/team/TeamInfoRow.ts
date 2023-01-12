import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitLightElement } from '../../lib/LitElement';

@customElement('t-info-row')
class TeamInfoRow extends LitLightElement {
	@property({ type: String }) key: string = '';

	@property({ type: String }) value: string = '';

	render() {
		return html`
			<div class="mt-2">
				<p class="font-medium">${this.value}</p>
				<p class="-mt-1 text-sm text-gray-500">${this.key}</p>
			</div>
		`;
	}
}

export default TeamInfoRow;
