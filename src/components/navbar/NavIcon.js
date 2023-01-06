import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NavIcon extends LitLightElement {
	static get properties() {
		return {
			title: { type: String },
			icon: { type: String },
			href: { type: String },
		};
	}

	render() {
		return html`
			<a
				class="${this
					.icon} text-lg cursor-pointer hover:text-sky-600 transition-colors duration-500"
				${this.href ? `href="${this.href}"` : ''}
			>
				<span class="sr-only">${this.title}</span>
			</a>
		`;
	}
}
customElements.define('g-nav-icon', NavIcon);
