import { Link } from 'react-router-dom';
import { ITransferDetails } from '../../../../types/Transfers.type';
import LogoAndImage from '../../../image/LogoAndImage';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';
import SmallTableCell from '../../../table/SmallCell';

export default function PlayerTransfers({ playerTransfers }: { playerTransfers: ITransferDetails[] }) {
	return (
		<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
			<header className="py-3 text-xl font-medium">Transfers</header>
			<table className="w-full">
				<TableHead className="text-left text-xs">
					<tr>
						<TableHeader className="pl-3">Date</TableHeader>
						<TableHeader className="pl-3">From</TableHeader>
						<TableHeader className="hidden pl-3 sm:table-cell">Type</TableHeader>
						<TableHeader className="px-3">To</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm">
					{playerTransfers.map((transfer, index) => (
						<TableRow
							key={new Date(transfer.date).getTime()}
							even={index % 2 === 0}
						>
							<SmallTableCell>
								{new Date(transfer.date).toLocaleDateString()}
								<span className="ml-2 block text-gray-600 dark:text-gray-400 sm:hidden">{transfer.type}</span>
							</SmallTableCell>
							<SmallTableCell>
								<Link to={`/teams/${transfer.teams.out.id}/`}>
									<LogoAndImage
										src={transfer.teams.out.logo}
										alt={transfer.teams.out.name}
										name={transfer.teams.out.name}
									/>
								</Link>
							</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">{transfer.type}</SmallTableCell>
							<SmallTableCell>
								<Link to={`/teams/${transfer.teams.in.id}/`}>
									<LogoAndImage
										src={transfer.teams.in.logo}
										alt={transfer.teams.in.name}
										name={transfer.teams.in.name}
									/>
								</Link>
							</SmallTableCell>
						</TableRow>
					))}
				</tbody>
			</table>
		</div>
	);
}
