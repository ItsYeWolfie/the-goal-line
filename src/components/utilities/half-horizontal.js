import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class HalfHorizontalLine extends LitLightElement {
	render() {
		return html`<hr class="w-1/2 translate-x-1/2 border-gray-400" />`;
	}
}

customElements.define('g-hr-half', HalfHorizontalLine);
