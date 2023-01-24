import { ITransferDetailsModified } from '../../../../types/Transfers.type';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHead from '../../../table/TableHead';
import TableHeader from '../../../table/TableHeader';
import TableRow from '../../../table/TableRow';

export default function PlayerTransfersTable({
	transfers,
	side,
}: {
	transfers: ITransferDetailsModified[];
	side: 'From' | 'To';
}) {
	return (
		<table className="w-full">
			<TableHead className="sticky top-0 text-xs">
				<tr>
					<TableHeader className="px-3 py-1 text-left">Date</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Player</TableHeader>
					<TableHeader className="px-3 py-1 text-left">{side}</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Type</TableHeader>
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
				{transfers.map((transfer, index) => {
					const date = new Date(transfer.date);

					return (
						<TableRow
							key={transfer.player.id + date.getTime()}
							even={index % 2 === 0}
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
						</TableRow>
					);
				})}
			</tbody>
		</table>
	);
}
