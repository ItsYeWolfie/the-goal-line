import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class NavItem extends LitLightElement {
	static properties = {
		title: {},
		href: {},
		icon: {},
		iconAlt: { attribute: 'icon-alt' },
	};

	connectedCallback() {
		super.connectedCallback();
	}

	render() {
		return html`
			<a
				class="flex items-center transition-colors duration-500 hover:text-sky-600"
				href="${this.href}"
			>
				<i class="${this.icon} text-lg md:text-2xl">
					<span class="sr-only">${this.iconAlt}</span>
				</i>
				<span class="ml-2 text-[12px] md:text-sm">${this.title}</span>
			</a>
		`;
	}
}

customElements.define('g-nav-item', NavItem);
