import { html } from 'lit';
import { LitLightElement } from '../../lib/LitElement';
import './FixtureRow';

class TransparentTable extends LitLightElement {
	static properties = {
		headers: {},
		loading: {},
	};

	constructor() {
		super();
		this.headers = 'Team,League,Season,Stage,Date,Status,Result';
		this.loading = true;

		this.fetchFixtures = async () => {
			return new Promise(async (resolve, reject) => {
				await fetch('https://api.npoint.io/3d56ae8265c24b49d6f8')
					.then((response) => response.json())
					.then((data) => {
						this.loading = false;
						return resolve(data);
					})
					.catch((error) => {
						this.loading = false;
						return reject(error);
					});
			});
		};

		this.fetchFixtures();
	}

	async connectedCallback() {
		super.connectedCallback();
		this.headers = this.headers.split(',');
		this.fixtures = await this.fetchFixtures();
	}

	render() {
		return html`
			<table class="min-w-full divide-y divide-gray-300">
				<thead class="uppercase text-xs">
					<tr>
						${this.headers.map(
							(header) => html`
								<th
									scope="col"
									class="${this.headers.indexOf(header) === 0
										? 'pl-4 pr-3 sm:pl-6'
										: 'px-3 py-3.5'}
										text-left font-semibold text-gray-900 lg:table-cell"
								>
									${header}
								</th>
							`
						)}
					</tr>
				</thead>
				<tbody>
					${this.loading &&
					html`
						<tr>
							<td colspan="${this.headers.length}" class="py-4 text-center">
								Loading...
							</td>
						</tr>
					`}
				</tbody>
			</table>
		`;
	}
}

customElements.define('g-transparent-table', TransparentTable);
