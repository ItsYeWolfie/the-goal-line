import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Matches extends LitLightElement {
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
		const response = await fetch('../data/fixtures.json');
		const data = await response.json();
		this.fixtures = data.response;
		this.loading = false;
		console.log(data);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-700 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:flex lg:w-full lg:justify-around"
				>
					<img class="animate-spin" src="../images/icons8-wait.svg" />
				</div>
			`;
		}

		return html`
			<div>
				${this.fixtures.map((fixture) => {
					const day = fixture.fixture.date;
					const date = new Date(day).toLocaleTimeString('en-GB', {
						hour: '2-digit',
						minute: '2-digit',
					});

					return html`
						<a href="./fixture.html" target="_blank"
							><div
								class="mt-2 flex cursor-pointer items-center rounded-md bg-gray-700 hover:h-16 hover:border-2 hover:border-solid hover:border-gray-700 hover:bg-gray-800"
							>
								<span class="my-auto ml-2">${date}</span>
								<div class="flex flex-col p-2">
									<span class="ml-2 flex">
										<img class="mr-2" src="${fixture.teams.home.logo}" width="20px" height="20px" />
										<p>${fixture.teams.home.name}</p>
										<p>${fixture.id}</p>
									</span>
									<span class="ml-2 flex">
										<img class="mr-2" src="${fixture.teams.away.logo}" width="20px" height="20px" />
										<p>${fixture.teams.away.name}</p>
									</span>
								</div>
								<div class="my-auto ml-auto mr-4 flex flex-col">
									<span>${fixture.score.fulltime.home}</span>
									<span>${fixture.score.fulltime.away}</span>
								</div>
							</div></a
						>
					`;
				})}
			</div>
		`;
	}
}
customElements.define('matches-m', Matches);
