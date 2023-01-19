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
        const response = await fetch('../data/country.json');
        const data = await response.json();
        this.countries = data.response;
        this.loading = false;
    }

    filterCountries() {
        return this.countries.filter(country => country.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }

    render() {
        if (this.loading) {
            return html`
                <div class="flex items-center justify-center">
                    <div class="loader h-6 w-6 animate-spin rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
                </div>
            `;
        }

        return html`
            <div class="flex flex-col">
                <span class="pt-2 my-auto pl-2 text-lg"><i class="fa-solid fa-magnifying-glass"></i>
                <input class="p-2 bg-gray-800 w-[85%] placeholder-inherit rounded-md border-0 active:border-0 focus:outline-0 focus:border-0 outline-0" type="text" placeholder="Search..." @input=${e => this.searchTerm = e.target.value}/></span>
                <span class="w-full border-[0.2px] mt-2 b-10 border-solid border-gray-200 opacity-30"></span>
                    ${this.filterCountries().map(
                        (country) => html`
                            <div class="flex p-2">
                                <span class="my-auto"><img class="rounded-sm" src="${country.flag}" width="30px"/></span>
                                <span class="ml-2 cursor-pointer text-sm text-gray-300 hover:text-sky-600">${country.name}</span>
                            </div>`
                    )}
            </div>
        `;
    }
}
customElements.define('countries-list', CountriesList);
