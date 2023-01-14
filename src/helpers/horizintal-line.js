import { html } from 'lit';
import { LitLightElement } from '../lib/LitElement';

class MyElement extends LitLightElement {
	render() {
		return html`
			<section class="m-[3%]">
				<div
					class="h-[2px]  w-[100%] rounded-full bg-gray-200  shadow-lg shadow-slate-300"
				></div>
			</section>
		`;
	}
}
customElements.define('h-line', MyElement);
