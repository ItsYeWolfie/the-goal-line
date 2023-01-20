import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class LineUp extends LitLightElement {
	static properties = {
		lineup: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.lineup = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.lineup = data;
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
			`;
		}
		return html`<div
			class="flex h-auto w-full justify-around rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:ml-40 lg:w-full"
		>
			<span class="my-auto flex flex-col"
				><img src="${this.lineup.teams.home.logo}" width="50px" height="50px"
			/></span>
			<div class="flex flex-col">
				<h3 class="text-left">
					<span class="text-lime-700">Coach</span> ${this.lineup.lineups[0].coach.name}
				</h3>
				<span
					class="w-auto border-[0.2px] border-solid border-gray-200 text-left opacity-30"
				></span>
				${this.lineup.lineups[0].startXI.map(
					(player) =>
						html` <h3 class="text-left">
							<span class="text-lime-700">${player.player.pos}</span> ${player
								.player.name}
						</h3>`
				)}
			</div>
			<div class="flex flex-col">
				<h3 class="text-right">
					${this.lineup.lineups[1].coach.name} <span class="text-sky-600">Coach</span>
				</h3>
				<span
					class=" border-[0.2px] border-solid border-gray-200 text-right opacity-30"
				></span>

				${this.lineup.lineups[1].startXI.map(
					(player) =>
						html` <h3 class="text-right">
							${player.player.name}
							<span class="text-sky-600">${player.player.pos}</span>
						</h3>`
				)}
			</div>
			<span class="my-auto flex flex-col"
				><img src="${this.lineup.teams.away.logo}" width="50px" height="50px"
			/></span>
		</div>`;
	}
}
customElements.define('lineup-f', LineUp);
