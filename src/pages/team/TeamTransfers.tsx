import { useLoaderData } from 'react-router-dom';
import { ITransferModified } from '../../../types/Transfers.type';
import PlayerTransfersTable from '../../components/tabs/team/transfers/PlayerTransfersTable';

export default function TeamTransfers() {
	const transfers = useLoaderData() as ITransferModified[];
	let transfersPerPlayer = transfers;
	transfersPerPlayer = transfersPerPlayer.map((transferItem) => {
		transferItem.transfers.map((transfer) => {
			transfer.player = transferItem.player;
			return transfer;
		});
		return transferItem;
	});
	transfersPerPlayer.sort((a, b) => {
		a.transfers.sort((aFirst, bFirst) => {
			return new Date(bFirst.date).getTime() - new Date(aFirst.date).getTime();
		});
		b.transfers.sort((aSecond, bSecond) => {
			return new Date(bSecond.date).getTime() - new Date(aSecond.date).getTime();
		});
		return new Date(b.transfers[0].date).getTime() - new Date(a.transfers[0].date).getTime();
	});

	const transfersIn = transfersPerPlayer
		.map((transferPerPlayer) => {
			return transferPerPlayer.transfers.filter((transfer) => transfer.teams.in.id === 33);
		})
		.filter((transfer) => transfer.length > 0)
		.flat()
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});

	const transfersOut = transfersPerPlayer
		.map((transferPerPlayer) => {
			return transferPerPlayer.transfers.filter((transfer) => transfer.teams.out.id !== 33);
		})
		.filter((transfer) => transfer.length > 0)
		.flat()
		.sort((a, b) => {
			return new Date(b.date).getTime() - new Date(a.date).getTime();
		});

	return (
		<section className="flex flex-col justify-between gap-8 lg:flex-row">
			<div className="lg:basis-1/2">
				<header className="mb-2 text-center text-lg font-bold">Transfers In</header>
				<div className="h-[50rem] overflow-auto">
					<PlayerTransfersTable
						transfers={transfersIn}
						side="From"
					/>
				</div>
			</div>
			<div className="lg:basis-1/2">
				<header className="mb-2 text-center text-lg font-bold">Transfers Out</header>
				<div className="h-[50rem] overflow-auto">
					<PlayerTransfersTable
						transfers={transfersOut}
						side="To"
					/>
				</div>
			</div>
		</section>
	);
}
