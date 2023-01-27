import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Match extends LitLightElement {
	static properties = {
		fixtures: { type: Array },
		loading: { type: Boolean },
		filteredEvents: { type: Array },
		combinedEvents: { type: Array },
	};

	constructor() {
		super();
		this.fixtures = [];
		this.loading = true;
		this.filteredEvents = [];
		this.combinedEvents = [];
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/6c7dc019d30ed2833962');
		const data = await response.json();
		this.fixtures = data;
		this.loading = false;
		console.log(data);
		this.filterEvents(data);
	}

	filterEvents(data) {
		const { events } = data;
		this.filteredEvents = events.filter((event) => {
			return event.team.id === 33 && event.type === 'Goal';
		});
		this.filteredEvents1 = events.filter((event) => {
			return event.team.id === 34 && event.type === 'Goal';
		});
		// console.log(this.filteredEvents);
		// console.log(this.filteredEvents1);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5  lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}
		return html`<div
			class="h-auto w-full justify-between rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 md:justify-around  lg:w-full"
		>
			<div class="flex justify-around">
				<div class="mt-6 flex flex-col">
					<span class="mb-2 flex flex-col items-center md:flex md:flex-row"
						><img src="${this.fixtures.teams.home.logo}" width="50px" height="50px" />
						<h2 class="text-md my-auto ml-1 md:text-xl">${this.fixtures.teams.home.name}</h2></span
					>
					${this.filteredEvents.map(
						(event) => html`
							<span class="flex text-[0.65rem] text-gray-300 md:ml-12 md:text-xs"
								><p>${event.player.name}</p>
								<p class="ml-2">${event.time.elapsed}'</p></span
							>
						`
					)}
				</div>
				<div class="mt-9 flex flex-col items-center">
					<div class="flex gap-4 md:gap-8">
						<h1 class="text-xl md:text-2xl">${this.fixtures.goals.home}</h1>
						<h3 class="text-base">${this.fixtures.fixture.status.short}</h3>
						<h1 class="text-xl md:text-2xl">${this.fixtures.goals.away}</h1>
					</div>
					<div class="flex gap-1 text-gray-400 md:gap-3">
						<h1 class="text-sm md:text-lg">${this.fixtures.score.halftime.home}</h1>
						<h3 class="text-xs md:text-sm">HT</h3>
						<h1 class="text-sm md:text-lg">${this.fixtures.score.halftime.away}</h1>
					</div>
				</div>
				<div class="mt-6 flex flex-col">
					<span class="mb-2 flex flex-col items-center md:flex md:flex-row"
						><img src="${this.fixtures.teams.away.logo}" width="50px" height="50px" />
						<h2 class="text-md my-auto ml-1 break-words md:text-xl">
							${this.fixtures.teams.away.name}
						</h2></span
					>
					${this.filteredEvents1.map(
						(event) => html`
							<span class="flex text-[0.65rem] text-gray-300 md:ml-12 md:text-xs">
								<p>${event.player.name}</p>
								<p class="ml-2">${event.time.elapsed}'</p></span
							>
						`
					)}
				</div>
			</div>
			<div class="flex justify-center text-sm text-gray-300 md:-mt-2">
				${this.fixtures.league.round}
			</div>
		</div>`;
	}
}
customElements.define('match-f', Match);
