import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class HhMatches extends LitLightElement {
	static properties = {
		h2h: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.h2h = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/fc39023d6bc500b8f692');
		const data = await response.json();
		this.h2h = data;
		this.loading = false;
		// console.log(data);
		this.firstThree = this.h2h.slice(0, 3);
		this.lastThree = this.h2h.slice(-3);
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full items-center justify-around rounded-md bg-gray-800 align-middle md:mx-auto md:w-4/5 lg:flex lg:w-full lg:justify-around"
				>
					<img src="../images/icons8-wait.svg" class="animate-spin">
				</div>
			`
		}
		return html`
		<div class="h-auto w-full rounded-md bg-gray-800 p-2 lg:h-auto">
			<table class="w-full text-center">
				<tbody class="table-row-group lg:mx-auto">
				${this.firstThree.map((h2h) =>
					html`
					<tr
						class="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30 text-center"
					>
						<td class="pl-1 text-sm text-right">
							<span class="flex w-full justify-center"
								><img src="${h2h.teams.home.logo}" width="15px"/>
								<p class="pl-1">${h2h.teams.home.name}</p></span
							>
						</td>
						<td class="pl-1 text-sm">${h2h.goals.home}</td>
						<td class="pl-1 text-sm">-</td>
						<td class="pl-1 text-sm">${h2h.goals.away}</td>
						<td class="pl-1 text-sm text-left">
							<span class="flex w-full justify-center"
								><img src="${h2h.teams.away.logo}" width="15px"/>
								<p class="pl-1">${h2h.teams.away.name}</p></span
							>
						</td>
					</tr>`)}
					${this.lastThree.map((h2h) =>
						html`
						<tr
							class="h-8 rounded-md border-b-[0.2px] border-solid border-gray-400 border-opacity-30"
						>
							<td class="pl-1 text-sm text-right">
								<span class="flex w-full justify-center"
									><img src="${h2h.teams.home.logo}" width="15px"/>
									<p class="pl-1">${h2h.teams.home.name}</p></span
								>
							</td>
							<td class="pl-1 text-sm text-center">${h2h.goals.home}</td>
							<td class="pl-1 text-sm text-center">-</td>
							<td class="pl-1 text-sm text-center">${h2h.goals.away}</td>
							<td class="pl-1 text-sm text-left">
								<span class="flex w-full justify-center"
									><img src="${h2h.teams.away.logo}" width="15px"/>
									<p class="pl-1">${h2h.teams.away.name}</p></span
								>
							</td>
						</tr>`)}
				</tbody>
			</table>
		</div>`
	}
}
customElements.define('hhmatches-f', HhMatches);
