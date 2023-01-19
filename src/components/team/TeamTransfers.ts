import { html } from 'lit-html';
import { customElement, property } from 'lit/decorators.js';
import { virtualize } from '@lit-labs/virtualizer/virtualize.js';
import { ITransfer, ITransferDetails } from '../../types/Transfers.type';
import { LitLightElement } from '../../lib/LitElement';
import { fetchData } from '../../lib/helpers/Fetch';

@customElement('team-transfers')
export class TeamTransfers extends LitLightElement {
	@property({ type: Boolean }) loading = true;

	transfers: ITransfer[] = [];

	@property() mutatedTransfers: ITransfer[] = [];

	@property({ type: Number }) selectedPlayer = -1;

	async connectedCallback() {
		super.connectedCallback();

		this.transfers = await fetchData<ITransfer[]>('https://api.npoint.io/e6cbde96c194aef54417');

		if (this.transfers.length > 0) {
			this.sortTransfersByPlayers();
			this.selectedPlayer = this.transfers[0].player.id;
			this.mutatedTransfers = this.filterTransfers();
		} else {
			this.selectedPlayer = -1;
		}
		this.loading = false;

		/**
		 * const transferDates = this.transfers
		 * 	.map((playerTransfer) =>
		 * 		playerTransfer.transfers.map((transfer) => {
		 * 			const date = new Date(transfer.date);
		 * 			return date.getFullYear();
		 * 		})
		 * 	)
		 * 	.flat()
		 * 	.sort((a, b) => a - b)
		 * 	.filter((value, index, self) => self.indexOf(value) === index);
		 */
	}

	sortTransfersByPlayers() {
		this.transfers.sort((a, b) => (a.player.name > b.player.name ? 1 : -1));
	}

	filterTransfers() {
		if (this.selectedPlayer === -1) {
			return this.transfers;
		}

		return this.transfers.filter((transfer) => transfer.player.id === this.selectedPlayer);
	}

	render() {
		return html`
			<div class="mb-8 flex items-center gap-4">
				<div>
					<label class="mb-1 block text-sm font-medium text-gray-100">Select Player</label>
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
			<div class="flow-root">
				<ul class="-mb-8" role="list">
					${!this.loading && this.mutatedTransfers.length > 0
						? html`
								${virtualize({
									items: this.mutatedTransfers,
									// eslint-disable-next-line @typescript-eslint/no-explicit-any
									renderItem: (playerTransfer: any) => html`<li>
										<header class="relative mb-2">${playerTransfer.player.name}</header>
										${playerTransfer.transfers.map(
											(transfer: ITransferDetails, index: number) => html`
												<div class="relative pb-8">
													${index !== playerTransfer.transfers.length - 1
														? html`
																<span
																	class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-500"
																	aria-hidden="true"
																>
																	<span class="sr-only">Transfer</span>
																</span>
														  `
														: ''}
													<div class="relative flex space-x-3">
														<div
															class="${transfer.teams.in.id === 33
																? 'bg-green-500'
																: 'bg-red-500'} flex h-8 w-8 items-center justify-center rounded-full"
														>
															${transfer.teams.in.id === 33
																? html`<i class="fas fa-arrow-left">
																		<span class="sr-only">Moved in icon</span>
																  </i>`
																: html`<i class="fas fa-arrow-right">
																		<span class="sr-only">Moved out icon</span>
																  </i>`}
														</div>
														<div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
															<div>
																<span class="text-sm text-gray-500"
																	>${transfer.type === 'Loan' ? 'Loaned from' : 'Moved from'}
																</span>
																<span class="text-sm font-medium text-gray-100">
																	${transfer.teams.out.name}
																</span>
																<span class="text-sm text-gray-500"> to </span>
																<span class="text-sm font-medium text-gray-100">
																	${transfer.teams.in.name}
																</span>
																<time class="text-sm text-gray-500">
																	on ${transfer.date.toLocaleString()}
																</time>
																<span class="text-sm text-gray-500"> (${transfer.type}) </span>
															</div>
														</div>
													</div>
												</div>
											`
										)}
									</li> `,
								})}
						  `
						: html`<li class="text-center text-gray-500">No transfers found</li>`}
				</ul>
			</div>
		`;
	}
}

export default TeamTransfers;
