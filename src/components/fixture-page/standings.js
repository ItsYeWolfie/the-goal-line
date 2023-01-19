import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Standings extends LitLightElement {
    static properties = {
        standings: { type: Array },
        loading: { type: Boolean },
    };

    constructor() {
        super();
        this.standings = [];
        this.loading = true;
    }

    async connectedCallback() {
        super.connectedCallback();
        const response = await fetch('../data/standings.json');
        const data = await response.json();
        this.standings = data.response;
        this.loading = false;
        console.log(data)
    }

    render() {
        if (this.loading) {
            return html`
                <div class = "flex items-center justify-center">
                    <div class = "loader h-6 w-6 animate-spin rounded-full border-8 border-t-8 border-gray-200 ease-linear"></div>
                </div>
            `;
        }
        return html`
        <div class = "w-full lg:h-auto p-2 h-auto bg-gray-800 rounded-md">
            <table class="table mx-auto border-solid border-[0.5px] rounded-t-md border-opacity-30 p-2 border-gray-400">
                <thead class="table-row-group h-9 p-1">
                    <tr class="border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                        <th>#</th>
                        <th class="text-left pl-2">Team</th>
                        <th class="w-9 text-center">
                            <span>P</span>
                        </th>
                        <th class="w-9 text-center" >
                            <span>GD</span>
                        </th>
                        <th class="w-9 text-center">
                            <span>PTS</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="table-row-group">
                ${this.standings[0].league.standings.flat().map(standing => 
                    html`
                    <tr class="relative border-solid border-b-[0.2px] rounded-md border-gray-400 border-opacity-30 h-8">
                    <td class="pl-1 text-sm items-center relative text-center">
                    ${this.standings[0].league.standings.flat().slice(0, 4).includes(standing) ? html`<span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-7 border-blue-500"></span>` : ""}
                    ${ standing === this.standings[0].league.standings.flat()[4] ? html`<span class="absolute border-b-4 top-7 rounded-t-md -ml-2 w-7 border-orange-500"></span>` : ""}
                    ${ this.standings[0].league.standings.flat().slice(-3).includes(standing) ? html`<span class="absolute border-b-4 top-7 rounded-t-md -ml-1 w-7 border-red-700"></span>` : ""}
                    <span class="pl-1 text-sm text-center">${standing.rank}</span>
                </td>
                        <td class="text-sm w-60 pl-2"><span class="flex"><img src="${standing.team.logo}" width="20px"/><p class="pl-1">${standing.team.name}</p></span></td>
                        <td class="pl-1 text-sm w-9 text-center">${standing.all.played}</td>
                        <td class="pl-1 text-sm w-9 text-center">${standing.goalsDiff}</td>
                        <td class="pl-1 text-sm w-9 text-center">${standing.points}</td>
                        </tr>
                    </tbody>
            </table>
        `)}
        </div>
`;
    }
}
customElements.define('standings-f', Standings);
