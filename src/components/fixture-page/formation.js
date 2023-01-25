import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Formation extends LitLightElement {
	static properties = {
		formation: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.formation = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/f7cb825e4feb737b6771');
		const data = await response.json();
		this.formation = data;
		this.loading = false;
		console.log(data);
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
					><img src="${this.formation[0].team.logo}" width="50px" height="50px" />
					<p>${this.formation[0].formation}</p></span
				>
				<span class="flex flex-col items-center md:hidden lg:my-auto lg:hidden"
					><img src="${this.formation[1].team.logo}" width="50px" height="50px" />
					<p>${this.formation[1].formation}</p></span
				>
			</span>
			<div class="mx-auto flex h-[16rem] w-[23.8rem] bg-green-900 md:mx-0 lg:mx-0">
				<div class="absolute h-64 w-48 border-2 border-solid border-white">
					<div class="absolute top-8 -ml-8 grid h-48 w-64 z-50 -rotate-90
						 justify-around align-middle gap-2 p-2">
						${this.formation[0].startXI.map((player) => {
							const grid = player.player.grid.split(':');
							const row = parseInt(grid[0]);
							const col = parseInt(grid[1]);
							console.log(row, col);
							return html`<div
								class="row-start-${row} col-start-${col} flex h-7 w-7 justify-center rounded-full bg-lime-700"
							>
								${player.player.pos}
							</div>`;
						})}
					</div>
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
					<div class="absolute top-8 -ml-8 grid h-48 w-64 z-50 rotate-90 justify-around gap-2 p-2">
						${this.formation[1].startXI.map((player) => {
							const grid = player.player.grid.split(':');
							const row = parseInt(grid[0]);
							const col = parseInt(grid[1]);
							console.log(row, col);
							return html`<div
								class="row-start-${row} col-start-${col} text flex  h-7 w-7 items-center justify-center rounded-full bg-sky-600"
							>
								${player.player.pos}
							</div>`;
						})}
						</div>
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
					><img src="${this.formation[1].team.logo}" width="50px" height="50px" />
					<p>${this.formation[1].formation}</p></span
				>
			</div>
		</div> `;
	}
}

customElements.define('formation-f', Formation);
