import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Match extends LitLightElement {
	static properties = {
		fixtures: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.fixtures = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.fixtures = data;
		this.loading = false;
		console.log(data);
	}

	render() {
		if (this.loading) {
			return html`
				<div
				class="h-auto w-full justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:h-40 lg:w-full"
				>
					<img src="../images/icons8-wait.svg" class="animate-spin">
				</div>
			`;
		}
		return html`<div
			class="h-auto w-full justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:h-40 lg:w-full"
		>
			<div class="flex justify-around">
				<div class="mt-6 flex flex-col">
					<span class="flex"
						><img
							src="${this.fixtures.teams.home.logo}"
							width="50px"
							height="50px"
						/>
						<h2 class="ml-1 my-auto text-xs md:text-xl">
							${this.fixtures.teams.home.name}
						</h2></span
					>
					<p class="ml-12 text-xs lg:mt-2">Salah 14'</p>
					<p class="ml-12 text-xs">Salah 68'</p>
				</div>
				<h1 class="mt-9 text-xl md:text-2xl">${this.fixtures.goals.home}</h1>
				<h3 class="mt-9">${this.fixtures.fixture.status.short}</h3>
				<h1 class="mt-9 text-xl md:text-2xl">${this.fixtures.goals.away}</h1>
				<div class="mt-6 flex flex-col">
					<span class="flex"
						><img
							src="${this.fixtures.teams.away.logo}"
							width="50px"
							height="50px"
						/>
						<h2 class="ml-1 my-auto break-words text-xs md:text-xl">
							${this.fixtures.teams.away.name}
						</h2></span
					>
					<p class="ml-12 mt-2 text-xs">Rashford 36'</p>
				</div>
			</div>
			<div class="mt-4 flex justify-center text-sm">
				${this.fixtures.league.round}
			</div>
		</div>`;
	}
}
customElements.define('match-f', Match);
