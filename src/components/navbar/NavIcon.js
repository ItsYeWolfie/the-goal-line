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
					.icon} cursor-pointer  text-[16px] md:text-lg transition-colors duration-500 hover:text-sky-600"
				${this.href ? `href="${this.href}"` : ''}
			>
				<span class="sr-only">${this.title}</span>
				<slot></slot>
			</a>
		`;
	}
}
customElements.define('g-nav-icon', NavIcon);
