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
            <div class="loader h-6 w-4 rounded-full animate-spin border-8 border-t-8 border-gray-200 ease-linear"
                    ></div>
                </div>
            `;
        }
        const firstFixture = this.fixtures[0];
        let day = firstFixture.fixture.date;
        let date = new Date(day).toLocaleDateString("en-GB", { 
            day: 'numeric', 
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return html`
                <div class="lg:w-full md:w-4/5 w-full h-10 bg-gray-800 flex justify-around align-middle lg:flex lg:justify-around rounded-md md:mx-auto items-center lg:ml-40">
                    <p><i class="fa-regular fa-calendar-days"></i>${date}</p>
                    <p class='flex'><img src='../../images/icons8-whistle.svg' class='pr-1' width='25px'/>${this.fixtures[0].fixture.referee}</p>
                    <p><i class="fa-solid fa-ring"></i>${this.fixtures[0].fixture.venue.name}</p> 
                </div>
        `;
    }
}

customElements.define('info-f', FixtureInfo);