import { useEffect, useMemo, useState, useCallback } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ITeamAndVenue } from '../../../../types/Team.types';
import { ITransferModified } from '../../../../types/Transfers.type';
import PlayerTransfersTable from './Table';

export default function TeamTransfers({ transfers }: { transfers: ITransferModified[] }) {
	const {
		team: { id },
	} = useOutletContext<ITeamAndVenue>();
	const [type, setType] = useState('All');
	const [year, setYear] = useState(0);
	const transfersPerPlayer = useMemo(
		() =>
			transfers.map((transferItem) => {
				return {
					...transferItem,
					transfers: transferItem.transfers.map((transfer) => ({ ...transfer, player: transferItem.player })),
				};
			}),
		[transfers],
	);

	const getTransfers = useCallback(() => {
		return transfersPerPlayer
			.flatMap((transferPerPlayer) => transferPerPlayer.transfers)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	}, [transfersPerPlayer]);

	const filterTransfers = useCallback(
		(side: 'in' | 'out') => {
			return getTransfers().filter((transfer) => {
				if (transfer.teams[side].id === id) return false;
				if (year !== -1 && new Date(transfer.date).getFullYear() !== Number(year)) return false;
				if (type === 'Transfer') {
					if (
						transfer.type === 'Loan' ||
						transfer.type === 'Free' ||
						transfer.type === 'N/A' ||
						transfer.type === null ||
						transfer.type === undefined ||
						transfer.type === 'Swap'
					) {
						return false;
					}
					return true;
				}

				if (type !== 'All' && transfer.type !== type) return false;
				return true;
			});
		},
		[getTransfers, id, type, year],
	);

	const filteredTransfersIn = useMemo(() => filterTransfers('out'), [filterTransfers]);
	const filteredTransfersOut = useMemo(() => filterTransfers('in'), [filterTransfers]);
	const years = useMemo(
		() => [
			...new Set(
				getTransfers()
					.map((transfer) => new Date(transfer.date).getFullYear())
					.sort((a, b) => b - a),
			),
		],
		[getTransfers],
	);

	useEffect(() => {
		setYear(years[0]);

		return () => {
			setYear(0);
		};
	}, [years]);
	return (
		<>
			<section className="mb-8">
				<header className="mb-2 font-medium uppercase">Transfer History</header>
				<div className="flex flex-wrap gap-8">
					<label
						className="flex flex-col rounded-full text-sm text-gray-700 dark:text-gray-300"
						htmlFor="year"
					>
						<span className="mb-1">Year</span>
						<select
							className="block rounded-md border-gray-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
							onChange={(e) => {
								setYear(Number(e.target.value));
							}}
							value={year}
						>
							<option value={-1}>All</option>
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
						className="flex flex-col rounded-full text-sm text-gray-700 dark:text-gray-300"
						htmlFor="type"
					>
						<span className="mb-1">Type</span>
						<select
							className="block rounded-md border-gray-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
							onChange={(e) => {
								setType(e.target.value);
							}}
							defaultValue={type}
						>
							{['All', 'Loan', 'Free', 'N/A', 'Swap', 'Transfer'].map((transferType) => (
								<option
									key={transferType}
									value={transferType}
								>
									{transferType}
								</option>
							))}
						</select>
					</label>
				</div>
			</section>
			<section className="flex flex-col justify-between gap-8 lg:flex-row">
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-green-500">Transfers In</header>
					<PlayerTransfersTable
						transfers={filteredTransfersIn}
						side="From"
					/>
				</div>
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-red-500">Transfers Out</header>
					<PlayerTransfersTable
						transfers={filteredTransfersOut}
						side="To"
					/>
				</div>
			</section>
		</>
	);
}
