import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Statistic extends LitLightElement {
    render() {
        return html
            `<div class="lg:w-full md:w-4/5 w-full md:ml-20 lg:ml-40 bg-gray-800 h-auto flex flex-col justify-evenly mb-4 pt-4 pb-4 rounded-md">
                <span class="flex justify-evenly"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Shots on Goal</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-28 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-20 bg-sky-500 rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Shots off Goal</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-32 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-16 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Total Shots</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-28 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-14 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Blocked Shots</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-24 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-16 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Shots insidebox</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-36 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-20 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Shots outsidebox</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-16 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-36 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Fouls</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-20 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-36 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Corner Kicks</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-36 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-20 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Offsides</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-28 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-16 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Ball Possession</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-2/3 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-1/3 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Yellow Cards</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-16 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-36 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>0</span><div class="text-center block w-[68%] lg:w-[50%] ">Red Cards</div><span>0</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-0 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-0 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Total passes</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-52 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-36 bg-sky-500  rounded-md"></span>
                    </span>
                </span>
                <span class="flex justify-evenly mt-2"><span>8</span><div class="text-center block w-[68%] lg:w-[50%] ">Passes accurate</div><span>6</span></span>
                <span class="flex justify-center">
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md justify-end">
                        <span class="w-44 mr-0 bg-lime-700 rounded-md"></span>
                    </span>
                    <span class="bg-slate-300 flex w-44 md:w-72 lg:w-72 h-2 rounded-md ml-1">
                        <span class="w-36 bg-sky-500 rounded-md"></span>
                    </span>
                </span>
            </div>`
}
}

customElements.define('statistic-f',Statistic);