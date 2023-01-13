import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { ITransfer } from '../../types/Transfers.type';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';

@customElement('team-transfers')
class TeamTransfers extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	transfers: ITransfer[] = [];

	mutatedTransfers: ITransfer[] = [];

	async connectedCallback() {
		super.connectedCallback();

		this.transfers = await fetchData<ITransfer[]>(
			'https://api.npoint.io/e6cbde96c194aef54417'
		);
		this.loading = false;
		/*		[0 … 99]
		0:player:{id: 20319, name: 'N. Bishop'}transfers:Array(1)0:{date: '2020-01-31', type: null, teams: {…}}
		*/
		this.mutatedTransfers = this.transfers.sort((a, b) => {
			const aDate = new Date(a.transfers[0].date);
			const bDate = new Date(b.transfers[0].date);
			return bDate.getTime() - aDate.getTime();
		});
		console.log(this.mutatedTransfers);
		/*
	0: player: id: 900name: "J. Lingard"[[Prototype]]: Objecttransfers: Array(8)0: {date: '2021-07-01', type: 'NA', teams: {…}}1: {date: '2021-01-29', type: 'Loan', teams: {…}}2: {date: '2015-07-01', type: 'N/A', teams: {…}}3: {date: '2015-02-02', type: 'Loan', teams: {…}}4: {date: '2014-07-01', type: 'N/A', teams: {…}}5: {date: '2014-02-27', type: 'Loan', teams: {…}}6: {date: '2014-01-03', type: 'N/A', teams: {…}}7: {date: '2012-11-02', type: 'Loan', teams: {…}}update: "2021-04-06T04:41:21+00:00"
		*/
	}

	render() {
		return html`
			<table class="relative min-w-full bg-gray-700">
				<thead class="sticky top-0 bg-gray-800">
					<tr class="text-left text-xs font-medium uppercase tracking-wider">
						<th class="px-6 py-3" scope="col">Player</th>
						<th class="px-6 py-3" scope="col">From</th>
						<th class="px-6 py-3" scope="col">Type</th>
						<th class="px-6 py-3" scope="col">To</th>
						<th class="px-6 py-3" scope="col">Date</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-500 text-gray-300">
					${this.loading
						? html`<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>
								<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>
								<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>
								<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>
								<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>
								<tr class="whitespace-nowrap text-sm">
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
									<td class="px-6 py-4">Loading...</td>
								</tr>`
						: html`
								${this.mutatedTransfers.map(
									(transfer, index) => html`
										<tr
											class="${index % 2 === 1
												? 'bg-gray-600'
												: ''}whitespace-nowrap text-sm"
										>
											<td class="px-6 py-4">${transfer.player.name}</td>
											<td class="px-6 py-4">
												<div class="flex items-center space-x-2">
													<img
														class="h-6 w-6 rounded-full"
														src=${transfer.transfers[0].teams.out.logo}
														alt=${transfer.transfers[0].teams.out.name}
													/>
													<p>${transfer.transfers[0].teams.out.name}</p>
												</div>
											</td>
											<td class="px-6 py-4">
												<div class="flex items-center space-x-2">
													<img
														class="h-6 w-6 rounded-full"
														src=${transfer.transfers[0].teams.in.logo}
														alt=${transfer.transfers[0].teams.in.name}
													/>
													<p>${transfer.transfers[0].teams.in.name}</p>
												</div>
											</td>
											<td class="px-6 py-4">${transfer.transfers[0].type}</td>
											<td class="px-6 py-4">${transfer.transfers[0].date}</td>
										</tr>
									`
								)}
						  `}
				</tbody>
			</table>
		`;
	}
}

export default TeamTransfers;
