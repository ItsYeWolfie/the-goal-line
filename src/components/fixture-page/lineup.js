import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class LineUp extends LitLightElement {
    render() {
        return html
            `<div class="text-xs md:text-lg flex justify-around md:mx-auto lg:ml-40 lg:w-full md:w-4/5 w-full h-auto p-2 bg-gray-800 rounded-md">
                <span class="flex flex-col my-auto"><img src="./photos/liverpool.png" width="50px" height="50px"></span>
                <div class="flex flex-col">
                    <h3 class="text-left"><span class="text-lime-700">Coach</span> Jurgen Kloop</h3>
                    <span class="text-left border-[0.2px] border-solid w-auto border-gray-200 opacity-30"></span>
                    <h3 class="text-left"><span class="text-lime-700">GK</span> Alisson</h3>
                    <h3 class="text-left"><span class="text-lime-700">DF</span> Tsimikas</h3>
                    <h3 class="text-left"><span class="text-lime-700">DF</span> Van Djik</h3>
                    <h3 class="text-left"><span class="text-lime-700">DF</span> Konate</h3>
                    <h3 class="text-left"><span class="text-lime-700">DF</span> Arnold</h3>
                    <h3 class="text-left"><span class="text-lime-700">MF</span> Thiago</h3>
                    <h3 class="text-left"><span class="text-lime-700">MF</span> Fabinho</h3>
                    <h3 class="text-left"><span class="text-lime-700">MF</span> Elliot</h3>
                    <h3 class="text-left"><span class="text-lime-700">FW</span> Chamberlain</h3>
                    <h3 class="text-left"><span class="text-lime-700">FW</span> Nunez</h3>
                    <h3 class="text-left"><span class="text-lime-700">FW</span> Salah</h3>
                </div>
                <div class="flex flex-col">
                    <h3 class="text-right">Erik ten Hag <span class="text-sky-600">Coach</span></h3>
                    <span class=" text-right border-[0.2px] border-solid border-gray-200 opacity-30"></span>
                    <h3 class="text-right">David De Gea <span class="text-sky-600">GK</span></h3>
                    <h3 class="text-right">Bissaka <span class="text-sky-600">DF</span></h3>
                    <h3 class="text-right">Varane <span class="text-sky-600">DF</span></h3>
                    <h3 class="text-right">Martinez <span class="text-sky-600">DF</span></h3>
                    <h3 class="text-right">Shaw <span class="text-sky-600">MF</span></h3>
                    <h3 class="text-right">Eriksen <span class="text-sky-600">MF</span></h3>
                    <h3 class="text-right">Casemiro <span class="text-sky-600">MF</span></h3>
                    <h3 class="text-right">Antony <span class="text-sky-600">MF</span></h3>
                    <h3 class="text-right">Fernandes <span class="text-sky-600">FW</span></h3>
                    <h3 class="text-right">Rashford <span class="text-sky-600">FW</span></h3>
                    <h3 class="text-right">Martial <span class="text-sky-600">FW</span></h3>
                </div>
                <span class="flex flex-col my-auto"><img src="./photos/manutd.png" width="50px" height="50px"></span>
            </div>`
}
}

customElements.define('lineup-f',LineUp);