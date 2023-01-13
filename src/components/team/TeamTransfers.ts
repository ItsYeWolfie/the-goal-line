import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { ITransfer } from '../../types/Transfers.type';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';

@customElement('team-transfers')
class TeamTransfers extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	transfers: ITransfer[] = [];

	@property() mutatedTransfers: ITransfer[] = [];

	@property({ type: Number }) selectedPlayer = -1;

	async connectedCallback() {
		super.connectedCallback();

		this.transfers = await fetchData<ITransfer[]>(
			'https://api.npoint.io/e6cbde96c194aef54417'
		);
		this.loading = false;

		this.mutatedTransfers = this.transfers.sort((a, b) => {
			return a.player.name > b.player.name ? 1 : -1;
		});

		this.selectedPlayer = this.mutatedTransfers[0].player.id;
		this.mutatedTransfers = this.filterTransfers();
	}

	filterTransfers() {
		if (this.selectedPlayer === -1) return this.transfers;

		return this.transfers.filter((transfer) => {
			return transfer.player.id === this.selectedPlayer;
		});
	}

	render() {
		return html`
			<div class="mb-8 flex items-center gap-4">
				<div>
					<label class="mb-1 block text-sm font-medium text-gray-100"
						>Select Player</label
					>
					<select
						class="bg-gray-800"
						@change="${(e: Event) => {
							if (this.loading) return;
							const target = e.target as HTMLSelectElement;
							this.selectedPlayer = Number(target.value);
							this.mutatedTransfers = this.filterTransfers();
						}}"
					>
						<option value="${-1}">None</option>

						${!this.loading &&
						this.transfers.map(
							(transfer) => html`
								<option
									value="${transfer.player.id}"
									?selected="${this.selectedPlayer === transfer.player.id}"
								>
									${transfer.player.name}
								</option>
							`
						)}
					</select>
				</div>
			</div>
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
								<tr class="whitespace-nowrap bg-gray-600 text-sm">
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
								<tr class="whitespace-nowrap bg-gray-600 text-sm">
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
								<tr class="whitespace-nowrap bg-gray-600 text-sm">
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
												: ''} whitespace-nowrap text-sm"
										>
											<td class="px-6 py-4 align-top text-white">
												<a href="/player.html?id=${transfer.player.id}">
													${transfer.player.name}
												</a>
											</td>
											<td class="px-6 py-4">
												<div class="flex flex-col space-y-2">
													${transfer.transfers.map(
														(teamTransfer) => html`
															<div class="flex items-center space-x-2">
																<img
																	class="h-6 w-6 rounded-full"
																	src=${teamTransfer.teams.in.logo}
																	alt=${teamTransfer.teams.in.name}
																/>
																<p>${teamTransfer.teams.in.name}</p>
															</div>
														`
													)}
												</div>
											</td>
											<td class="px-6 py-4">
												<div class="flex flex-col space-y-3">
													${transfer.transfers.map(
														(teamTransfer) =>
															html` <p>${teamTransfer.type}</p> `
													)}
												</div>
											</td>

											<td class="px-6 py-4">
												<div class="flex flex-col space-y-2">
													${transfer.transfers.map(
														(teamTransfer) => html`
															<div class="flex items-center space-x-2">
																<img
																	class="h-6 w-6 rounded-full"
																	src=${teamTransfer.teams.out.logo}
																	alt=${teamTransfer.teams.out.name}
																/>
																<p>${teamTransfer.teams.out.name}</p>
															</div>
														`
													)}
												</div>
											</td>

											<td class="px-6 py-4">
												<div class="flex flex-col space-y-3">
													${transfer.transfers.map(
														(teamTransfer) =>
															html` <p>${teamTransfer.date}</p> `
													)}
												</div>
											</td>
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
