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
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.formation = data;
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
			<div
				class="mx-auto flex h-[16rem] w-[23.8rem] bg-green-900 md:mx-0 lg:mx-0"
			>
				<div class="absolute h-64 w-48 border-2 border-solid border-white">
					<span
						class="absolute mt-28 ml-0.5 h-8 w-8 rounded-full bg-lime-700 text-center"
						>1</span
					>
					<span
						class="absolute z-10 mt-8 ml-14 h-8 w-8 rounded-full bg-lime-700 text-center"
						>2</span
					>
					<span
						class="absolute z-10 mt-20 ml-12 h-8 w-8 rounded-full bg-lime-700 text-center"
						>3</span
					>
					<span
						class="absolute z-10 mt-36 ml-12 h-8 w-8 rounded-full bg-lime-700 text-center"
						>4</span
					>
					<span
						class="absolute z-10 mt-48 ml-14 h-8 w-8 rounded-full bg-lime-700 text-center"
						>5</span
					>
					<span
						class="absolute z-10 mt-16 ml-[6.57rem] h-8 w-8 rounded-full bg-lime-700 text-center"
						>6</span
					>
					<span
						class="absolute z-10 mt-28 ml-24 h-8 w-8 rounded-full bg-lime-700 text-center"
						>7</span
					>
					<span
						class="absolute z-10 mt-40 ml-[6.57rem] h-8 w-8 rounded-full bg-lime-700 text-center"
						>8</span
					>
					<span
						class="absolute z-10 mt-6 ml-36 h-8 w-8 rounded-full bg-lime-700 text-center"
						>9</span
					>
					<span
						class="absolute z-10 mt-28 ml-36 h-8 w-8 rounded-full bg-lime-700 text-center"
						>10</span
					>
					<span
						class="absolute z-10 mt-48 ml-36 h-8 w-8 rounded-full bg-lime-700 text-center"
						>11</span
					>

					<div
						class="absolute -ml-[1px] mt-12 h-40 w-20 border-2 border-solid border-white"
					>
						<div
							class="absolute mt-7 -ml-0.5 h-24 w-12 border-2 border-solid border-white"
						></div>
						<span
							class="absolute ml-[76.5px] mt-12 h-14 rounded-r-full border-2 border-solid border-white px-3"
						></span>
					</div>
					<div
						class="absolute ml-[155px] mt-[90px] rounded-full border-2 border-solid border-white px-8 py-8"
					></div>
				</div>
				<div
					class="absolute ml-[191px] h-64 w-48 border-2 border-solid border-white"
				>
					<span
						class="absolute z-10 mt-28 ml-[155px] h-8 w-8 rounded-full bg-sky-600 text-center"
						>1</span
					>
					<span
						class="absolute z-10 mt-12 ml-24 h-8 w-8 rounded-full bg-sky-600 text-center"
						>2</span
					>
					<span
						class="absolute z-10 mt-28 ml-28 h-8 w-8 rounded-full bg-sky-600 text-center"
						>3</span
					>
					<span
						class="absolute z-10 mt-44 ml-24 h-8 w-8 rounded-full bg-sky-600 text-center"
						>4</span
					>
					<span
						class="absolute z-10 mt-4 ml-14 h-8 w-8 rounded-full bg-sky-600 text-center"
						>5</span
					>
					<span
						class="absolute z-10 mt-20 ml-14 h-8 w-8 rounded-full bg-sky-600 text-center"
						>6</span
					>
					<span
						class="absolute z-10 mt-36 ml-14 h-8 w-8 rounded-full bg-sky-600 text-center"
						>7</span
					>
					<span
						class="absolute z-10 mt-52 ml-14 h-8 w-8 rounded-full bg-sky-600 text-center"
						>8</span
					>
					<span
						class="absolute z-10 mt-6 ml-2 h-8 w-8 rounded-full bg-sky-600 text-center"
						>9</span
					>
					<span
						class="absolute z-10 mt-28 ml-4 h-8 w-8 rounded-full bg-sky-600 text-center"
						>10</span
					>
					<span
						class="absolute z-10 mt-48 ml-2 h-8 w-8 rounded-full bg-sky-600 text-center"
						>11</span
					>

					<div
						class="absolute mt-12 ml-[110px] h-40 w-20 border-2 border-solid border-white"
					>
						<div
							class="absolute mt-7 ml-[30.5px] h-24 w-12 border-2 border-solid border-white"
						></div>
						<div
							class="absolute -ml-[27px] mt-12 h-14 rounded-l-full border-2 border-solid border-white px-3"
						></div>
					</div>
				</div>
			</div>
			<span class="my-auto hidden items-center md:flex md:flex-col lg:flex lg:flex-col"
				><img src="${this.formation.teams.away.logo}" width="50px" height="50px" />
				<p>${this.formation.lineups[1].formation}</p></span
			>
		</div>`;
	}
}

customElements.define('formation-f', Formation);
