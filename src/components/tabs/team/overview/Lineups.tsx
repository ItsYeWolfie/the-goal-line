import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewLineups({ lineups }: { lineups: ITeamStatistics['lineups'] }) {
	return (
		<table className="bg-neutral-700">
			<thead className="bg-neutral-800 text-sm">
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Formation Lineup</TableHeader>
					<TableHeader className="py-1 px-3 text-left">Played</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				{lineups.map((lineup, index) => (
					<tr
						className={index % 2 === 0 ? 'bg-neutral-600' : ''}
						key={lineup.formation}
					>
						<SmallTableCell className="w-56">{lineup.formation}</SmallTableCell>
						<SmallTableCell className="text-left">{lineup.played}</SmallTableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
}
