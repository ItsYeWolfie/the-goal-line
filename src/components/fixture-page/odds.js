import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Odds extends LitLightElement {
		static properties = {
		odds: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.odds = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/e55bdbd19828e3e8f80f');
		const data = await response.json();
		this.odds = data;
		this.loading = false;
		// console.log(data);
	}
render() {
		if (this.loading) {
			return html`
				<div
						class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:flex lg:w-full lg:justify-around"
					>
						<img src="../images/icons8-wait.svg" class="animate-spin">
					</div>
			`
		}
		return html`<div class="flex h-auto w-full justify-around rounded-md bg-gray-800 p-4 lg:h-auto">
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>1</span>
				<span><i class="fa-solid fa-arrow-up text-lg text-green-600"></i></span>
				<span>${this.odds.bookmakers[0].bets[0].values[0].odd}</span>
			</div>
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>x</span>
				<span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
				<span>${this.odds.bookmakers[0].bets[0].values[1].odd}</span>
			</div>
			<div
				class="flex h-8 w-28 items-center justify-around rounded-md border-[1px] border-gray-400"
			>
				<span>2</span>
				<span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
				<span>${this.odds.bookmakers[0].bets[0].values[2].odd}</span>
			</div>
		</div>`
	}
}

customElements.define('odds-f', Odds);
