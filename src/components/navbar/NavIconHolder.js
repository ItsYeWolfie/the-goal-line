import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NavIconHolder extends LitLightElement {
	render() {
		return html`
			<div
				class="${this
					.classList} flex w-[100] flex-col gap-8 text-xs text-gray-400"
			>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define('g-nav-icon-holder', NavIconHolder);
