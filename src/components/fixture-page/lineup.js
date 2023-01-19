import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class LineUp extends LitLightElement {
    static properties = {
        lineup: { type: Array },
        loading: { type: Boolean },
    };

    constructor() {
        super();
        this.lineup = [];
        this.loading = true;
    }

    async connectedCallback() {
        super.connectedCallback();
        const response = await fetch('../data/lineups.json');
        const data = await response.json();
        this.lineup = data.response;
        this.loading = false;
        // console.log(data);
    }

    render() {
        if (this.loading) {
            return html`
            <div class="lg:w-full md:w-4/5 w-full h-10 bg-gray-800 flex justify-around align-middle lg:flex lg:justify-around rounded-md md:mx-auto items-center lg:ml-40">
            <div class="loader h-6 w-4 rounded-full animate-spin border-8 border-t-8 border-gray-200 ease-linear"
                    ></div>
                </div>
            `;
        }
        return html
            `<div class="text-xs md:text-lg flex justify-around md:mx-auto lg:ml-40 lg:w-full md:w-4/5 w-full h-auto p-2 bg-gray-800 rounded-md">
                <span class="flex flex-col my-auto"><img src="${this.lineup[0].team.logo}" width="50px" height="50px"></span>
                <div class="flex flex-col">
                    <h3 class="text-left"><span class="text-lime-700">Coach</span> ${this.lineup[0].coach.name}</h3>
                    <span class="text-left border-[0.2px] border-solid w-auto border-gray-200 opacity-30"></span>
                    ${this.lineup[0].startXI.map((player) => 
                        html`
                    <h3 class="text-left"><span class="text-lime-700">${player.player.pos}</span> ${player.player.name}</h3>`
                        )}
                    </div>
                <div class="flex flex-col">
                    <h3 class="text-right">${this.lineup[1].coach.name} <span class="text-sky-600">Coach</span></h3>
                    <span class=" text-right border-[0.2px] border-solid border-gray-200 opacity-30"></span>
                
                ${this.lineup[1].startXI.map((player) => 
                        html`
                    <h3 class="text-right">${player.player.name} <span class="text-sky-600">${player.player.pos}</span></h3>`
                    )}
                    </div>
                <span class="flex flex-col my-auto"><img src="${this.lineup[1].team.logo}" width="50px" height="50px"></span>
            </div>`
    }
}
customElements.define('lineup-f',LineUp);