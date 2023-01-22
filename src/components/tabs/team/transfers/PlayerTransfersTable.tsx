import { ITransferDetailsModified } from '../../../../../types/Transfers.type';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function PlayerTransfersTable({
	transfers,
	side,
}: {
	transfers: ITransferDetailsModified[];
	side: 'From' | 'To';
}) {
	return (
		<table className="w-full">
			<thead className="sticky top-0 bg-gray-800 text-xs">
				<tr>
					<TableHeader className="px-3 py-1 text-left">Date</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Player</TableHeader>
					<TableHeader className="px-3 py-1 text-left">{side}</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Type</TableHeader>
				</tr>
			</thead>
			<tbody className="max-h-96 overflow-auto text-xs">
				{transfers.map((transfer, index) => {
					const date = new Date(transfer.date);
					return (
						<tr
							key={transfer.player.id + date.getTime()}
							className={index % 2 === 0 ? 'bg-gray-700' : ''}
						>
							<SmallTableCell>
								{date.toLocaleString('en-GB', {
									year: 'numeric',
									month: 'numeric',
									day: 'numeric',
								})}
							</SmallTableCell>
							<SmallTableCell>{transfer.player.name}</SmallTableCell>
							{side === 'From' ? (
								<SmallTableCell>
									<div className="flex items-center">
										<img
											src={transfer.teams.out.logo}
											alt={transfer.teams.out.name}
											className="mr-2 h-4 w-4"
										/>
										<p>{transfer.teams.out.name}</p>
									</div>
								</SmallTableCell>
							) : (
								<SmallTableCell>
									<div className="flex items-center">
										<img
											src={transfer.teams.in.logo}
											alt={transfer.teams.in.name}
											className="mr-2 h-4 w-4"
											loading="lazy"
										/>
										<p>{transfer.teams.in.name}</p>
									</div>
								</SmallTableCell>
							)}

							<SmallTableCell>{transfer.type}</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
