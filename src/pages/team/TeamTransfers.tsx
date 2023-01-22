import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ITransferModified } from '../../../types/Transfers.type';
import PlayerTransfersTable from '../../components/tabs/team/transfers/PlayerTransfersTable';

export default function TeamTransfers() {
	const [type, setType] = useState('All');
	const [year, setYear] = useState('All');
	const transfers = useLoaderData() as ITransferModified[];

	const transfersPerPlayer = transfers.map((transferItem) => {
		return {
			...transferItem,
			transfers: transferItem.transfers.map((transfer) => ({ ...transfer, player: transferItem.player })),
		};
	});

	const getTransfers = () => {
		return transfersPerPlayer
			.flatMap((transferPerPlayer) => transferPerPlayer.transfers)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	};

	const filteredTransfersIn = getTransfers().filter((transfer) => {
		if (transfer.teams.out.id === 33) return false;
		if (year !== 'All' && new Date(transfer.date).getFullYear() !== Number(year)) return false;
		if (type !== 'All' && transfer.type !== type) return false;
		return true;
	});

	const filteredTransfersOut = getTransfers().filter((transfer) => {
		if (transfer.teams.in.id === 33) return false;
		if (year !== 'All' && new Date(transfer.date).getFullYear() !== Number(year)) return false;
		if (type !== 'All' && transfer.type !== type) return false;
		return true;
	});

	const years = getTransfers().map((transfer) => new Date(transfer.date).getFullYear());

	return (
		<>
			<section className="mb-8">
				<header className="mb-2 font-medium uppercase">Transfer History</header>
				<div className="flex flex-wrap gap-8">
					<label
						className="flex flex-col rounded-full text-sm text-gray-300"
						htmlFor="year"
					>
						<span className="mb-1">Year</span>
						<select
							className="bg-gray-700  text-sm text-gray-300 transition-all duration-300"
							onChange={(e) => {
								setYear(e.target.value);
							}}
						>
							<option value="All">All</option>
							{years.map((transferYear) => (
								<option
									key={transferYear}
									value={transferYear}
								>
									{transferYear}
								</option>
							))}
						</select>
					</label>
					<label
						className="flex flex-col rounded-full text-sm text-gray-300"
						htmlFor="type"
					>
						<span className="mb-1">Type</span>
						<select
							className="bg-gray-700  text-sm text-gray-300 transition-all duration-300"
							onChange={(e) => {
								setType(e.target.value);
							}}
							defaultValue={type}
						>
							<option value="All">All</option>
							<option value="Loan">Loan</option>
							<option value="Transfer">Transfer</option>
						</select>
					</label>
				</div>
			</section>
			<section className="flex flex-col justify-between gap-8 lg:flex-row">
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-green-500">Transfers In</header>
					<div className="h-[50rem] overflow-auto">
						<PlayerTransfersTable
							transfers={filteredTransfersIn}
							side="From"
						/>
					</div>
				</div>
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-red-500">Transfers Out</header>
					<div className="h-[50rem] overflow-auto">
						<PlayerTransfersTable
							transfers={filteredTransfersOut}
							side="To"
						/>
					</div>
				</div>
			</section>
		</>
	);
}
