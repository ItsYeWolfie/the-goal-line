import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Predictions extends LitLightElement {
    render() {
        return html
            `<div  class=" w-full lg:h-auto p-4 h-auto bg-gray-800 rounded-md">
                <span class="flex justify-evenly"><span>65%</span><div class="text-center block w-[68%]">Who wins the match?</div><span>35%</span></span>
                <span class="flex justify-center">
                <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                    <span class="w-[65%] bg-lime-700 rounded-md"></span>
                </span>
                <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                    <span class="w-[35%] bg-sky-500 rounded-md"></span>
                </span>
                </span>
            </div>`
}
}

customElements.define('predictions-f',Predictions);