import { ITransferDetailsModified } from '../../../../../types/Transfers.type';
import TableCell from '../../../table/TableCell';
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
					<TableHeader className="p-3 text-left">Player</TableHeader>
					<TableHeader className="p-3 text-left">{side}</TableHeader>
					<TableHeader className="p-3">Date</TableHeader>
					<TableHeader className="p-3">Type</TableHeader>
				</tr>
			</thead>
			<tbody className="h-96 divide-y divide-gray-500 overflow-auto text-xs">
				{transfers.map((transfer, index) => {
					const date = new Date(transfer.date);
					return (
						<tr
							key={transfer.player.id + date.getTime()}
							className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-600'}
						>
							<TableCell>{transfer.player.name}</TableCell>
							{side === 'From' ? (
								<TableCell>{transfer.teams.out.name}</TableCell>
							) : (
								<TableCell>{transfer.teams.in.name}</TableCell>
							)}
							<TableCell className="text-center">
								{date.toLocaleString('en-GB', {
									year: 'numeric',
									month: 'short',
									day: 'numeric',
								})}
							</TableCell>
							<TableCell className="text-center">{transfer.type}</TableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
