import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class Formation extends LitLightElement {
    render() {
        return html
            `<div class="lg:w-full md:w-4/5 w-full md:mx-auto lg:ml-40 bg-gray-800 h-auto flex-col md:flex md:flex-row md:justify-evenly lg:flex lg:flex-row lg:justify-evenly pt-4 pb-4 rounded-md">
                <span class="flex justify-around">
                    <span class="flex flex-col md:my-auto lg:my-auto"><img src="./photos/liverpool.png" width="50px" height="50px"><p class="ml-1">4-3-3</p></span>
                    <span class="flex flex-col md:hidden lg:hidden lg:my-auto"><img src="./photos/manutd.png" width="50px" height="50px"><p class="ml-1">3-4-3</p></span>
                </span>
                <div class="bg-green-900 flex mx-auto md:mx-0 lg:mx-0 w-[23.8rem] h-[16rem]">
                    <div class="w-48 h-64 border-solid border-2 border-white absolute">
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-0.5 bg-lime-700">1</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-8 ml-14 z-10 bg-lime-700">2</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-20 ml-12 z-10 bg-lime-700">3</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-36 ml-12 z-10 bg-lime-700">4</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-48 ml-14 z-10 bg-lime-700">5</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-16 ml-[6.57rem] z-10 bg-lime-700">6</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-24 z-10 bg-lime-700">7</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-40 ml-[6.57rem] z-10 bg-lime-700">8</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-6 ml-36 z-10 bg-lime-700">9</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-36 z-10 bg-lime-700">10</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-48 ml-36 z-10 bg-lime-700">11</span>
                        
                        <div class="w-20 h-40 -ml-[1px] mt-12 border-solid border-2 border-white absolute">
                            <div class="w-12 h-24 mt-7 -ml-0.5 border-solid border-2 border-white absolute"></div>
                            <span class="border-solid border-2 border-white absolute rounded-r-full px-3 h-14 ml-[76.5px] mt-12"></span>
                        </div>
                        <div class="rounded-full border-solid border-2 border-white absolute px-8 py-8 ml-[155px] mt-[90px]"></div>
                    </div>
                    <div class="w-48 h-64 ml-[191px] border-solid border-2 border-white absolute">
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-[155px] z-10 bg-sky-600">1</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-12 ml-24 z-10 bg-sky-600">2</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-28 z-10 bg-sky-600">3</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-44 ml-24 z-10 bg-sky-600">4</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-4 ml-14 z-10 bg-sky-600">5</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-20 ml-14 z-10 bg-sky-600">6</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-36 ml-14 z-10 bg-sky-600">7</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-52 ml-14 z-10 bg-sky-600">8</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-6 ml-2 z-10 bg-sky-600">9</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-28 ml-4 z-10 bg-sky-600">10</span>
                        <span class="rounded-full w-8 h-8 text-center absolute mt-48 ml-2 z-10 bg-sky-600">11</span>
                        
                        <div class="w-20 h-40 mt-12 ml-[110px] border-solid border-2 border-white absolute">
                            <div class="w-12 h-24 mt-7 ml-[30.5px] border-solid border-2 border-white absolute"></div>
                            <div class="border-solid border-2 border-white absolute rounded-l-full px-3 h-14 -ml-[27px] mt-12"></div>
                        </div>
                    </div>
                </div>
                <span class="lg:flex lg:flex-col md:flex md:flex-col hidden my-auto"><img src="./photos/manutd.png" width="50px" height="50px"><p class="ml-1">3-4-3</p></span>
            </div>`
}
}

customElements.define('formation-f',Formation);