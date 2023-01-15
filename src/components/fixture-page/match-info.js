import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class MatchInfo extends LitLightElement {
    render() {
        return html
            `<div class="lg:w-full md:w-4/5 w-full h-10 pt-1 bg-gray-800 flex justify-around align-middle lg:flex lg:justify-around rounded-md md:mx-auto items-center lg:ml-40">
                <p><i class="fa-regular fa-calendar-days"></i> 30 Dec 2022</p>
                <p><i class="fa-solid fa-whistle"></i>Craig Pawson</p>
                <p><i class="fa-solid fa-ring"></i> Anfield</p> 
            </div>`
}
}

customElements.define('info-f',MatchInfo);