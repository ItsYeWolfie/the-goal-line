import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Formation extends LitLightElement {
	static properties = {
		formation: { type: Array },
		lineups: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.formation = [];
		this.lineups = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.formation = data;
		this.loading = false;
		// console.log(data);
		const res = await fetch('https://api.npoint.io/b8858615fa989d8d57a7');
		const lineupsData = await res.json();
		this.lineups = lineupsData;
		console.log(lineupsData);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}
		return html`<div
				class="h-auto w-full flex-col rounded-md bg-gray-800 pt-4 pb-4 md:mx-auto md:flex md:w-4/5 md:flex-row md:justify-evenly lg:ml-40 lg:flex lg:w-full lg:flex-row lg:justify-evenly"
			>
				<span class="flex justify-around">
					<span class="flex flex-col items-center md:my-auto lg:my-auto"
						><img src="${this.formation.teams.home.logo}" width="50px" height="50px" />
						<p>${this.formation.lineups[0].formation}</p></span
					>
					<span class="flex flex-col items-center md:hidden lg:my-auto lg:hidden"
						><img src="${this.formation.teams.away.logo}" width="50px" height="50px" />
						<p>${this.formation.lineups[1].formation}</p></span
					>
				</span>
				<div class="mx-auto flex h-[16rem] w-[23.8rem] bg-green-900 md:mx-0 lg:mx-0">
					<div
						class="absolute h-64 w-48 grid-cols-4 grid-rows-4 border-2 border-solid border-white"
					>
						<div class="absolute -ml-[1px] mt-12 h-40 w-20 border-2 border-solid border-white">
							<div class="absolute mt-7 -ml-0.5 h-24 w-12 border-2 border-solid border-white"></div>
							<span
								class="absolute ml-[77px] mt-12 h-14 rounded-r-full border-2 border-solid border-white px-3"
							></span>
						</div>
						<div
							class="absolute ml-[155px] mt-[90px] rounded-full border-2 border-solid border-white px-8 py-8"
						></div>
					</div>
					<div class="absolute ml-[191px] h-64 w-48 border-2 border-solid border-white">
						<div class="absolute mt-12 ml-[110px] h-40 w-20 border-2 border-solid border-white">
							<div
								class="absolute mt-7 ml-[30.5px] h-24 w-12 border-2 border-solid border-white"
							></div>
							<div
								class="absolute -ml-[27.5px] mt-12 h-14 rounded-l-full border-2 border-solid border-white px-3"
							></div>
						</div>
					</div>
				</div>
				<span class="my-auto hidden items-center md:flex md:flex-col lg:flex lg:flex-col"
					><img src="${this.formation.teams.away.logo}" width="50px" height="50px" />
					<p>${this.formation.lineups[1].formation}</p></span
				>
			</div>
			<div class="flex">
				<div class="grid h-64 w-48 grid-cols-4 grid-rows-4 items-center gap-4 bg-green-700">
					${this.lineups[0].startXI.map((player) => {
						const [row, col] = player.player.grid.split(':');
						console.log(player.player.grid);
						return html`<div
							class="row-span-${row} col-span-${col} h-8 w-8 rounded-full bg-gray-500 text-center"
						>
							1
						</div>`;
					})};
				</div>
				<div class="grid grid-cols-4 grid-rows-4 gap-4 bg-green-700">
					${this.lineups[1].startXI.map((player) => {
						const [row, col] = player.player.grid.split(':');
						return html`<div
							class="col-start-${col} row-start-${row} h-8 w-8 rounded-full bg-gray-500 text-center"
						>
							1
						</div>`;
					})}
				</div>
			</div> `;
	}
}

customElements.define('formation-f', Formation);
