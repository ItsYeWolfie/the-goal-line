import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class FixtureInfo extends LitLightElement {
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
		const day = this.fixtures.fixture.date;
		const date = new Date(day).toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});

		return html`
			<div
				class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:ml-40 lg:flex lg:w-full lg:justify-around"
			>
				<p class="text-xs md:text-lg"><i class="fa-regular fa-calendar-days"></i> ${date}</p>
				<p class="flex text-xs md:text-lg">
					<img
						class="pr-1"
						src="../../images/icons8-whistle.svg"
						width="25px"
					/> ${this.fixtures.fixture.referee}
				</p>
				<p class="text-xs md:text-lg">
					<i class="fa-solid fa-ring"></i> ${this.fixtures.fixture.venue.name}
				</p>
			</div>
		`;
	}
}

customElements.define('info-f', FixtureInfo);
