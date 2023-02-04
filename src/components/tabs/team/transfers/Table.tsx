import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ITransferDetailsModified } from '../../../../types/Transfers.type';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';
import PaginatedPrevAndNext from '../../../pagination/PrevAndNext';
import LogoAndImage from '../../../image/LogoAndImage';

export default function PlayerTransfersTable({
	transfers,
	side,
}: {
	transfers: ITransferDetailsModified[];
	side: 'From' | 'To';
}) {
	const [displayedItems, setDisplayedItems] = useState([] as ITransferDetailsModified[]);
	return (
		<>
			<table className="w-full">
				<TableHead className="sticky top-0 text-xs">
					<tr>
						<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">Date</TableHeader>
						<TableHeader className="px-3 py-1 text-left">Player</TableHeader>
						<TableHeader className="px-3 py-1 text-left">{side}</TableHeader>
						<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">Type</TableHeader>
					</tr>
				</TableHead>
				<tbody className="overflow-auto text-xs md:max-h-96">
					{transfers.length === 0 && (
						<TableRow even>
							<SmallTableCell
								colSpan={4}
								className="text-center"
							>
								No transfers
							</SmallTableCell>
						</TableRow>
					)}
					{displayedItems.map((transfer, index) => {
						const date = new Date(transfer.date);

						return (
							<TableRow
								key={transfer.player.id + date.getTime()}
								even={index % 2 === 0}
							>
								<SmallTableCell className="hidden sm:table-cell">
									{date.toLocaleString('en-GB', {
										year: 'numeric',
										month: 'numeric',
										day: 'numeric',
									})}
								</SmallTableCell>
								<SmallTableCell>
									<Link to={`/players/${transfer.player.id}/`}>{transfer.player.name}</Link>
								</SmallTableCell>
								<SmallTableCell>
									{side === 'From' ? (
										<Link to={`/teams/${transfer.teams.out.id}/`}>
											<LogoAndImage
												src={transfer.teams.out.logo}
												alt={transfer.teams.out.name}
												name={transfer.teams.out.name}
											/>
										</Link>
									) : (
										<Link to={`/teams/${transfer.teams.in.id}/`}>
											<LogoAndImage
												src={transfer.teams.in.logo}
												alt={transfer.teams.in.name}
												name={transfer.teams.in.name}
											/>
										</Link>
									)}
									<div className="ml-2 mt-1 flex flex-col text-xs text-gray-700 dark:text-gray-300 sm:hidden">
										<span>
											{date.toLocaleString('en-GB', {
												year: 'numeric',
												month: 'numeric',
												day: 'numeric',
											})}
										</span>
										<span>{transfer.type}</span>
									</div>
								</SmallTableCell>

								<SmallTableCell className="hidden sm:table-cell">{transfer.type}</SmallTableCell>
							</TableRow>
						);
					})}
				</tbody>
			</table>
			<PaginatedPrevAndNext
				items={transfers}
				setDisplayedItems={setDisplayedItems}
				splitCount={10}
				className="flex justify-between"
			/>
		</>
	);
}
