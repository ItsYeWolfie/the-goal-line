import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

export default class StickyBackgroundTable extends LitLightElement {
	static properties = {
		headers: {},
	};

	connectedCallback() {
		super.connectedCallback();
		this.headers = this.headers.split(',');
	}

	render() {
		return html`
			<div class="min-w-full divide-gray-300 table relative">
				<div class="uppercase text-xs table-header-group sticky">
					<div class="table-row bg-gray-400 sticky top-0">
						${this.headers.map(
							(header) => html`
								<div
									scope="col"
									class="${this.headers.indexOf(header) === 0
										? 'pl-4 pr-3 sm:pl-6'
										: 'px-3 py-3.5'}
										text-left font-semibold text-gray-900 lg:table-cell border-b"
								>
									${header}
								</div>
							`
						)}
					</div>
				</div>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define('sticky-background-table', StickyBackgroundTable);
