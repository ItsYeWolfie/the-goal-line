import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Odds extends LitLightElement {
	render() {
		return html`<div
			class="flex h-auto w-full justify-around rounded-md bg-gray-800 p-4 lg:h-auto"
		>
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>1</span>
				<span><i class="fa-solid fa-arrow-up text-lg text-green-600"></i></span>
				<span>1.67</span>
			</div>
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>x</span>
				<span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
				<span>1.67</span>
			</div>
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>2</span>
				<span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
				<span>1.67</span>
			</div>
		</div>`;
	}
}

customElements.define('odds-f', Odds);
