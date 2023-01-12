import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';


class HhMatches extends LitLightElement {
    render() {
        return html
            `<div class="w-full lg:h-auto p-2 h-auto bg-gray-800 rounded-md"> 
            <table class="w-full text-center">
                <tbody class="table-row-group lg:mx-auto">
                    <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8 text-center">
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/liverpool.png" width="20px"/><p class="pl-1">Liverpool</p></span></td>
                        <td class="pl-1 text-sm">2</td>
                        <td class="pl-1 text-sm">-</td>
                        <td class="pl-1 text-sm">1</td>
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/manutd.png" width="20px"/><p class="pl-1">Manchester United</p></span></td>
                    </tr>
                    <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8 text-center">
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/liverpool.png" width="20px"/><p class="pl-1">Liverpool</p></span></td>
                        <td class="pl-1 text-sm">2</td>
                        <td class="pl-1 text-sm">-</td>
                        <td class="pl-1 text-sm">1</td>
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/manutd.png" width="20px"/><p class="pl-1">Manchester United</p></span></td>
                    </tr>
                    <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8 text-center">
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/liverpool.png" width="20px"/><p class="pl-1">Liverpool</p></span></td>
                        <td class="pl-1 text-sm">2</td>
                        <td class="pl-1 text-sm">-</td>
                        <td class="pl-1 text-sm">1</td>
                        <td class="pl-1 text-sm"><span class="flex ml-6 md:ml-20 lg:ml-4"><img src="./photos/manutd.png" width="20px"/><p class="pl-1">Manchester United</p></span></td>
                    </tr>
                </tbody>
            </table>
            </div>`
}
}

customElements.define('hhmatches-f',HhMatches);