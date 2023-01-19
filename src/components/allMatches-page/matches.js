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
            <div class="lg:w-full md:w-4/5 w-full h-10 bg-gray-700 flex justify-around align-middle lg:flex lg:justify-around rounded-md md:mx-auto items-center lg:ml-40">
                <div class="loader h-6 w-4 rounded-full animate-spin border-8 border-t-8 border-gray-200 ease-linear"></div>
            </div>
            `;
        }
    
        return html`
        <div>
            ${this.fixtures.map(fixture => {
                let day = fixture.fixture.date;
                let date = new Date(day).toLocaleTimeString("en-GB", { hour: '2-digit', minute:'2-digit'});
    
                return html`
                <a href="./fixture.html"><div class="bg-gray-700 mt-2 cursor-pointer flex items-center rounded-md hover:h-16 hover:bg-gray-800 hover:border-solid hover:border-2 hover:border-gray-700">
                <span class="my-auto ml-2">${date}</span>
                    <div class="flex flex-col p-2">
                        <span class="flex ml-2">
                            <img src="${fixture.teams.home.logo}" width="20px" height="20px" class="mr-2"/><p>${fixture.teams.home.name}</p>
                            <p>${fixture.id}</p>
                        </span>
                        <span class="flex ml-2">
                            <img src="${fixture.teams.away.logo}" width="20px" height="20px" class="mr-2"/><p>${fixture.teams.away.name}</p> 
                    </span>
                </div>
                <div class="flex flex-col ml-auto my-auto mr-4">
                    <span>${fixture.score.fulltime.home}</span>
                    <span>${fixture.score.fulltime.away}</span>
                </div>
            </div></a>
            `;
        })}
    </div>
    `;
}
}
customElements.define('matches-m', Matches);