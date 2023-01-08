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
			<div class="relative table min-w-full">
				<div class="table-header-group text-xs uppercase">
					<div class="sticky top-0 table-row bg-gray-400">
						${this.headers.map(
							(header) => html`
								<div
									class="${this.headers.indexOf(header) === 0
										? 'pl-4 pr-3 sm:pl-6'
										: 'px-3 py-3.5'}
										border-b text-left font-semibold text-gray-900 lg:table-cell"
									scope="col"
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
