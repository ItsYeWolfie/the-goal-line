import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Match extends LitLightElement {
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
        // console.log(data);
    }

    render() {
        if (this.loading) {
            return html`
            <div class="lg:w-full md:w-4/5 w-full h-10 bg-gray-800 flex justify-around align-middle lg:flex lg:justify-around rounded-md md:mx-auto items-center lg:ml-40">
            <div class="loader h-6 w-6 rounded-full animate-spin border-8 border-t-8 border-gray-200 ease-linear"
                    ></div>
                </div>
            `;
        }
        return html
            `<div class="justify-around align-middle md:w-4/5 lg:w-full w-full lg:h-40 h-auto bg-gray-800 rounded-md md:mx-auto lg:ml-40">
            <div class="flex justify-around">
            <div class="flex flex-col mt-6">
                <span class="flex"><img src="${this.fixtures[0].teams.home.logo}" width="50px" height="50px">
                    <h2 class="mt-4 text-lg lg:text-xl">${this.fixtures[0].teams.home.name}</h2></span>
                <p class="text-xs ml-12 lg:mt-2">Salah 14'</p>
                <p class="text-xs ml-12">Salah 68'</p>
            </div>
            <h1 class="mt-9 text-2xl">${this.fixtures[0].goals.home}</h1>
            <h3 class="mt-9">${this.fixtures[0].fixture.status.short}</h3>
            <h1 class="mt-9 text-2xl">${this.fixtures[0].goals.away}</h1>
            <div class="flex flex-col mt-6">
                <span class="flex"><img src="${this.fixtures[0].teams.away.logo}" width="50px" height="50px">
                    <h2 class="ml-1 -mt-1 break-words text-lg md:mt-4 lg:text-xl">${this.fixtures[0].teams.away.name}</h2></span>
                <p class="text-xs ml-12 mt-2">Rashford 36'</p>
            </div>
            </div>
            <div class="flex justify-center mt-4 text-sm">${this.fixtures[0].league.round}</div>
            </div>`
}
}
customElements.define('match-f',Match);