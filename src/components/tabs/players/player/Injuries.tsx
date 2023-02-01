import { Link } from 'react-router-dom';
import { IPlayerInjury } from '../../../../types/Player.types';
import LogoAndImage from '../../../image/LogoAndImage';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';
import SmallTableCell from '../../../table/SmallCell';

export default function PlayerInjuries({ injuries }: { injuries: IPlayerInjury[] }) {
	return (
		<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
			<header className="py-3 text-xl font-medium">Injury History</header>
			<table className="w-full">
				<TableHead className="text-left text-xs">
					<tr>
						<TableHeader className="pl-3">Date</TableHeader>
						<TableHeader className="hidden pl-3 sm:table-cell">Type</TableHeader>
						<TableHeader className="pl-3">Reason</TableHeader>
						<TableHeader className="hidden px-3 sm:table-cell">Playing Team</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm">
					{injuries.map((injury, index) => (
						<TableRow
							key={new Date(injury.fixture.date).getTime()}
							even={index % 2 === 0}
						>
							<SmallTableCell className="pl-3">
								{new Date(injury.fixture.date).toLocaleDateString()}
								<Link
									className="ml-2 sm:hidden"
									to={`/teams/${injury.team.id}/`}
								>
									<LogoAndImage
										src={injury.team.logo}
										alt={injury.team.name}
										name={injury.team.name}
									/>
								</Link>
							</SmallTableCell>

							<SmallTableCell className="hidden pl-3 sm:table-cell">{injury.player.type}</SmallTableCell>
							<SmallTableCell className="pl-3">
								{injury.player.reason}
								<span className="ml-2 block text-gray-500 sm:hidden">{injury.player.type}</span>
							</SmallTableCell>
							<SmallTableCell className="hidden px-3 sm:table-cell">
								<Link to={`/teams/${injury.team.id}/`}>
									<LogoAndImage
										src={injury.team.logo}
										alt={injury.team.name}
										name={injury.team.name}
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
