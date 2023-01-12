import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Match extends LitLightElement {
    render() {
        return html
            `<div class="justify-around align-middle md:w-4/5 lg:w-full w-full lg:h-40 h-auto bg-gray-800 rounded-md md:mx-auto lg:ml-40">
            <div class="flex justify-around">
            <div class="flex flex-col mt-6">
                <span class="flex"><img src="./photos/liverpool.png" width="50px" height="50px">
                    <h2 class="mt-4 text-lg lg:text-xl">Liverpool</h2></span>
                <p class="text-xs ml-12 lg:mt-2">Salah 14'</p>
                <p class="text-xs ml-12">Salah 68'</p>
            </div>
            <h1 class="mt-9 text-2xl">2</h1>
            <h3 class="mt-9">FT</h3>
            <h1 class="mt-9 text-2xl">1</h1>
            <div class="flex flex-col mt-6">
                <span class="flex"><img src="./photos/manutd.png" width="50px" height="50px">
                    <h2 class="ml-1 lg:mt-4 md:mt-4 -mt-1 text-lg lg:text-xl">Manchester <br class="md:hidden lg:hidden">United</h2></span>
                <p class="text-xs ml-12 mt-2">Rashford 36'</p>
            </div>
            </div>
            <div class="flex justify-center mt-4 text-sm">Round 32</div>
            </div>`
}
}

customElements.define('match-f',Match);