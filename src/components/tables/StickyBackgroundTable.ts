import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

@customElement('sticky-background-table')
export default class StickyBackgroundTable extends LitLightElement {
	static properties = {
		headers: { type: Array },
	};

	@property({ type: Array }) headers: string[] = [];

	render() {
		return html`
			<div class="${this.classList} relative table border-collapse bg-gray-700">
				<div
					class="sticky top-0 table-header-group bg-gray-800 text-xs uppercase"
				>
					<div class="table-row">
						${this.headers.map(
							(header) => html`
								<div
									class="${this.headers.indexOf(header) === 0
										? 'pl-4 pr-3 sm:pl-6'
										: 'px-3 py-3.5'} text-left font-semibold text-gray-300 lg:table-cell"
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
