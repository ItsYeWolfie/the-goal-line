import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Match extends LitLightElement {
	static properties = {
		fixtures: { type: Array },
		loading: { type: Boolean },
		filteredEvents: { type: Array },
		combinedEvents: { type: Array }
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
		// console.log(data);
		this.filterEvents(data);
	}

	filterEvents(data) {
		var events = data.events;
		this.filteredEvents = events.filter(function(event) {
			return event.team.id === 33 && event.type === "Goal";
		});
		this.filteredEvents1 = events.filter(function(event) {
			return event.team.id === 34 && event.type === "Goal";
		});
		// console.log(this.filteredEvents);
		// console.log(this.filteredEvents1);
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
		return html`<div
			class="h-auto w-full justify-between md:justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:h-40 lg:w-full"
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
						${this.filteredEvents.map(event => html`
							<span class="flex text-gray-300 text-[0.65rem] md:text-xs"><p class="player ml-12">${event.player.name}</p><p class="ml-2">${event.time.elapsed}'</p></span>
						`)}

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
					${this.filteredEvents1.map(event => html`
							<span class="flex text-gray-300 text-[0.65rem] md:text-xs"><p class="ml-12">${event.player.name}</p class= ml-2">${event.time.elapsed}'</p></span>
						`)}
				</div>
			</div>
			<div class="flex justify-center pt-2 text-sm text-gray-300">
				${this.fixtures.league.round}
			</div>
		</div>`;
	}
}
customElements.define('match-f', Match);
