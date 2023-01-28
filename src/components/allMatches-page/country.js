import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class CountriesList extends LitLightElement {
	static properties = {
		countries: { type: Array },
		loading: { type: Boolean },
		searchTerm: { type: String },
		selectedCountry: { type: Object },
		selectedCountryData: { type: Object },
		showList: { type: Boolean },
		showSelectedCountryData: { type: Boolean },
		cups: { type: Array },
		groupedCups: { type: Array },
	};

	constructor() {
		super();
		this.countries = [];
		this.loading = true;
		this.searchTerm = '';
		this.showList = true;
		this.selectedCountry = [];
		this.showSelectedCountryData = false;
		this.cups = [];
		this.groupedCups = [];
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/c1b77191c0cc9d3ae051');
		const data = await response.json();
		this.countries = data;
		this.loading = false;
		// console.log(data);

		const res = await fetch('https://api.npoint.io/484684e50cfa51dfed36');
		const dataC = await res.json();
		this.cups = dataC;
		// console.log(dataC);

		const groupedCups = {};
		this.cups.forEach((cup) => {
			const country = cup.country.name;
			if (!groupedCups[country]) {
				groupedCups[country] = [cup];
			} else {
				groupedCups[country].push(cup);
			}
			groupedCups[country].name = cup.name;
		});

		this.groupedCups = groupedCups;
		console.log(groupedCups.World);

		if (this.selectedCountry) {
			const selectedCountryDataResponse = await fetch(`https://api.npoint.io/699acd2fa754e5bd47d6`);
			const selectedCountryData = await selectedCountryDataResponse.json();
			this.selectedCountryData = selectedCountryData;
			// console.log(selectedCountryData);
		}
	}

	selectCountry(country) {
		this.selectedCountryName = country.name;
		this.selectedCountry = country;
		this.showSelectedCountryData = true;
		this.showList = false;
	}

	filterCountries() {
		return this.countries.filter((country) =>
			country.name.toLowerCase().startsWith(this.searchTerm.toLowerCase())
		);
	}

	sortedCountries(countries) {
		const topCountries = ['England', 'Italy', 'Spain', 'France', 'Germany', 'Switzerland'];

		return countries.sort((a, b) => {
			if (topCountries.includes(a.name) && !topCountries.includes(b.name)) {
				return -1;
			}
			if (!topCountries.includes(a.name) && topCountries.includes(b.name)) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}

	sortedCups(cups) {
		const topCups = [
			'UEFA Champions League',
			'UEFA Europa League',
			'Confederations Cup',
			'FIFA Club World Cup',
			'Copa America',
		];

		return cups.sort((a, b) => {
			if (topCups.includes(a.name) && !topCups.includes(b.name)) {
				return -1;
			}
			if (!topCups.includes(a.name) && topCups.includes(b.name)) {
				return 1;
			}
			if (a.name < b.name) {
				return -1;
			}
			if (a.name > b.name) {
				return 1;
			}
			return 0;
		});
	}

	render() {
		if (this.loading) {
			return html`
				<div class="flex items-center justify-center">
					<img class="animate-spin" src="../images/icons8-wait.svg" />
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
				${this.showList
					? html`
							${this.sortedCountries(this.filterCountries()).map(
								(country) => html`
									<div class="flex h-auto p-2">
										<span class="my-auto"
											><img
												class="rounded-sm"
												src="${country.flag === null ? '../images/noimg.png' : country.flag}"
												width="30px"
										/></span>
										<span
											class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
											@click=${() => {
												this.selectCountry(country);
												this.selectedCountry = country;
												this.showList = false;
												this.showSelectedCountryData = true;
											}}
											>${country.name}</span
										>
									</div>
								`
							)}
							${this.sortedCups(this.groupedCups.World).map(
								(cups) =>
									html` <div class="flex h-auto p-2">
										<span class="my-auto"
											><img
												class="rounded-sm bg-gray-200"
												src="${cups.league.logo === null
													? '../images/noimg.png'
													: cups.league.logo}"
												width="30px"
												;
										/></span>
										<span class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600"
											>${cups.league.name}</span
										>
									</div>`
							)}
					  `
					: html``}
				${this.showSelectedCountryData
					? html`
							<div>
								<button
									class="p-3 text-sky-600"
									@click=${() => {
										if (this.selectedCountry !== '' && this.showSelectedCountryData === true) {
											this.showList = true;
											this.showSelectedCountryData = false;
										}
									}}
								>
									<i class="fa fa-chevron-left"></i
									><span class="ml-4 text-lg">Leagues of ${this.selectedCountryName}</span>
								</button>
								${this.selectedCountryData && this.selectedCountryName === 'England'
									? this.selectedCountryData.map(
											(league) =>
												html` <span class="flex items-center p-2"
													><img
														class="bg-gray-200"
														src="${league.league.logo === null
															? '../images/noimg.png'
															: league.league.logo}"
														width="30px"
														height="30px"
													/>
													<p class="pl-2">${league.league.name}</p></span
												>`
									  )
									: ''}
							</div>
					  `
					: html``}
			</div>
		`;
	}
}
customElements.define('countries-list', CountriesList);
