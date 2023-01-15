import { LitLightElement } from '../../lib/LitElement';
import { html } from 'lit';

class Table extends LitLightElement {
    render() {
        return html
            `<div class="w-full lg:h-auto p-2 h-auto bg-gray-800 rounded-md"> 
                <table class="table mx-auto border-solid border-[0.5px] rounded-t-md border-opacity-30 p-2 border-gray-400">
                    <thead class="table-row-group h-9 p-1">
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <th>#</th>
                            <th class="text-left pl-2">Team</th>
                            <th class="w-9 text-center">
                                <span class="cursor-help" data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom">P</span>
                                <div id="tooltip-bottom" role="tooltip" class="tooltip absolute -mt-8 z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                                    Played
                                </div>
                            </th>
                            <th class="w-9 text-center" >
                                <span class="cursor-help" data-tooltip-target="tooltip-bottom1" data-tooltip-placement="bottom">GD</span>
                                <div id="tooltip-bottom1" role="tooltip" class="tooltip absolute -mt-8 z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                                    Goals Difference
                                </div>
                            </th>
                            <th class="w-9 text-center">
                                <span class="cursor-help" data-tooltip-target="tooltip-bottom2" data-tooltip-placement="bottom">PTS</span>
                                <div id="tooltip-bottom2" role="tooltip" class="tooltip absolute -mt-8 z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                                    Points
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table-row-group">
                        <tr class="relative border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-6 border-blue-500"></span>
                                1 
                                <div id="tooltip-right" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Champions League
                                </div>     
                            </td>
                            <td class="text-sm w-60 pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Arsenal</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-6 border-blue-500"></span>
                                2
                                <div id="tooltip-right" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Champions League
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Manchester City</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-6 border-blue-500"></span>
                                3
                                <div id="tooltip-right" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Champions League
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Newcastle City</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-6 border-blue-500"></span>
                                4
                                <div id="tooltip-right" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Champions League
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="./photos/manutd.png" width="20px"/><p class="pl-1">Manchester United</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right1" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-6 border-orange-500"></span>
                                5
                                <div id="tooltip-right1" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 whitespace-nowrap text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Europa League
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Tottenham Hotspur</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">
                                6
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="./photos/liverpool.png" width="20px"/><p class="pl-1">Liverpool</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">7</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Fulham</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">8</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Brighton & Hove Albion</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">9</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Brentford</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">10</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Chelsea</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">11</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Aston Villa</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">12</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Crystal Palace</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">13</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Leiceser City</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">14</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Leeds United</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">15</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Nottingham Forest</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">16</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">AFC Bournemouth</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm text-center">17</td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">West Ham United</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right2" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-1 w-6 border-red-700"></span>
                                18
                                <div id="tooltip-right2" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Relegation
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Everton</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right2" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-1 w-6 border-red-700"></span>
                                19
                                <div id="tooltip-right2" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Relegation
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Wolverhampton Wanderers</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                        <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                            <td class="pl-1 text-sm relative text-center cursor-help" data-tooltip-target="tooltip-right2" data-tooltip-placement="right">
                                <span class="absolute border-b-4 top-7 rounded-t-md -ml-1 w-6 border-red-700"></span>
                                20
                                <div id="tooltip-right2" role="tooltip" class="tooltip absolute z-10 inline-block bg-gray-700 font-medium shadow-sm text-white py-1 px-3 text-sm rounded-lg opacity-0 invisible" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="right">
                                    Relegation
                                </div>
                            </td>
                            <td class="text-sm pl-2"><span class="flex"><img src="" width="20px"/><p class="pl-1">Southampton</p></span></td>
                            <td class="pl-1 text-sm w-9 text-center">17</td>
                            <td class="pl-1 text-sm w-9 text-center">26</td>
                            <td class="pl-1 text-sm w-9 text-center">44</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="mt-4 ml-4 md:ml-36 lg:ml-1 text-[11px]">
                    <div class="flex"><div class="rounded-full bg-blue-500 mt-0.5 mr-2 w-3 h-3 relative"></div>
                    Champions League
                    </div>
                </div>
                <div class="mt-2 ml-4 md:ml-36 lg:ml-1 text-[11px]">
                    <div class="flex"><div class="rounded-full bg-orange-500 mt-0.5 mr-2 w-3 h-3 relative"></div>
                    Europa League
                    </div>
                </div>
                <div class="mt-2 ml-4 md:ml-36 lg:ml-1 text-[11px]">
                    <div class="flex"><div class="rounded-full bg-red-700 mt-0.5 mr-2 w-3 h-3 relative"></div>
                    Relegation
                    </div>
                </div>
            </div>`
}
}

customElements.define('table-f',Table);