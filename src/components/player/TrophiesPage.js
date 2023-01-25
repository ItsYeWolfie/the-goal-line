import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class TrophiesPage extends LitLightElement {
	static properties = {
		trophies: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.trophies = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch('https://api.npoint.io/3ab2b7fa0e7154edd1db');
		const data = await response.json();
		this.trophies = data;
		this.loading = false;
		Object.keys(data).forEach((key) => {
			this[key] = data[key];
		});
		console.log(data);
		
	}

	render() {
		if (this.loading) {
			return html`
				<div
					class="flex h-10 w-full justify-center text-center text-white rounded-md bg-gray-800  "
				>
			   <h1>Loading ...</h1>
				</div>
			`;
		}
		return html`
			<
				<div class="flex flex-shrink-0 flex-grow-0 basis-12 flex-col text-white">
					
					
					<table class="bg-gray-700 uppercase">
						<thead class="bg-gray-800 text-sm">
							<tr>
								<th class="py-1 pl-3 text-left">League</th>
								<th class="py-1 pl-3 text-left">Country</th>
								<th class="py-1 pl-3 text-left">Season</th>
								<th class="py-1 pl-3 text-left">Place</th>
								
								
							</tr>
						</thead>
						<tbody class="text-xs">
							${this.loading
								? html`<tr>
										<td class="py-2 pl-3" colspan="100">Loading...</td>
								  </tr>`
								: this.response.map(
										(res, index) => html`
											<tr class="${index % 2 === 1 ? 'bg-gray-600' : ''}">
												<td class="py-4 pl-3">${res.league}</td>
												<td class="py-4 pl-3">${res.country}</td>
												<td class="py-4 pl-3">${res.place}</td>
												<td class="py-4 pl-3">${res.place}</td>
											</tr>
										`
								  )}
						</tbody>
					</table>
				</div>

				
			
		`;
	}
}
customElements.define('trophies-page', TrophiesPage);