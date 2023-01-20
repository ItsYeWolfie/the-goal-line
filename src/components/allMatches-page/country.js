import { data } from 'autoprefixer';
import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class CountriesList extends LitLightElement {
	static properties = {
		countries: { type: Array },
		loading: { type: Boolean },
		searchTerm: { type: String },
	};

	constructor() {
		super();
		this.countries = [];
		this.loading = true;
		this.searchTerm = '';
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/c1b77191c0cc9d3ae051');
		const data = await response.json();
		this.countries = data;
		this.loading = false;
		console.log(data)
	}

	filterCountries() {
		return this.countries.filter((country) =>
			country.name.toLowerCase().includes(this.searchTerm.toLowerCase())
		);
	}

	render() {
		if (this.loading) {
			return html`
				<div class="flex items-center justify-center">
					<img src="../images/icons8-wait.svg" class="animate-spin">
				</div>
			`;
		}

		return html`
			<div class="flex flex-col">
				<span class="my-auto pt-2 pl-2 text-lg"
					><i class="fa-solid fa-magnifying-glass"></i>
					<input
						class="w-[85%] rounded-md border-0 bg-gray-800 p-2 placeholder-inherit outline-0 focus:border-0 focus:outline-0 active:border-0"
						type="text"
						placeholder="Search..."
						@input=${(e) => (this.searchTerm = e.target.value)}
				/></span>
				<span
					class="b-10 mt-2 w-full border-[0.2px] border-solid border-gray-200 opacity-30"
				></span>
				${this.filterCountries().map(
					(country) => html` <div class="flex p-2">
						<span class="my-auto"
							><img class="rounded-sm" src="${country.flag}" width="30px"
						/></span>
						<span
							class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
							>${country.name}</span
						>
					</div>`
				)}
			</div>
		`;
	}
}
customElements.define('countries-list', CountriesList);
