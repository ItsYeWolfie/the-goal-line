import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';

class Sidelines extends LitLightElement {
	static properties = {
		sidelines: { type: Array },
		loading: { type: Boolean },
	};

	constructor() {
		super();
		this.sidelines = [];
		this.loading = true;
	}

	async connectedCallback() {
		super.connectedCallback();
		const response = await fetch(' https://api.npoint.io/fa7a62b9f7e7fd32e57d');
		const data = await response.json();
		this.sidelines = data;
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
								<th class="py-1 pl-3 text-left">Type</th>
								<th class="py-1 pl-3 text-left">Start Date</th>
								<th class="py-1 pl-3 text-left">end date</th>
								
								
								
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
												<td class="py-4 pl-3">${res.type}</td>
												<td class="py-4 pl-3">${res.start}</td>
                                                <td class="py-4 pl-3">${res.end}</td>
												
											</tr>
										`
								  )}
						</tbody>
					</table>
				</div>

				
			
		`;
	}
}
customElements.define('sidelines-p', Sidelines);