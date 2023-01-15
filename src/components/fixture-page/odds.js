import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Odds extends LitLightElement {
    render() {
        return html
            `<div  class="flex justify-around w-full lg:h-auto p-4 h-auto bg-gray-800 rounded-md">
                <div class="flex items-center rounded-md w-28 h-8 justify-around border-[1px] border-gray-400">
                    <span>1</span>
                    <span><i class="fa-solid fa-arrow-up text-lg text-green-600"></i></span>
                    <span>1.67</span>
                </div>
                <div class="flex items-center rounded-md w-28 h-8 justify-around border-[1px] border-gray-400">
                    <span>x</span>
                    <span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
                    <span>1.67</span>
                </div>
                <div class="flex items-center rounded-md w-28 h-8 justify-around border-[1px] border-gray-400">
                    <span>2</span>
                    <span><i class="fa-solid fa-arrow-down text-lg text-red-600"></i></span>
                    <span>1.67</span>
                </div>
         </div>`
}
}

customElements.define('odds-f',Odds);