import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewLineups({
	lineups,
}: {
	lineups: ITeamStatistics['lineups'];
}) {
	return (
		<table className="w-full bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Formation Lineup</th>
					<th className="py-1 px-3 text-left">Played</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				{lineups.map((lineup, index) => (
					<tr
						className={index % 2 === 0 ? 'bg-gray-600' : ''}
						key={lineup.formation}>
						<td className="w-56 py-2 pl-3">{lineup.formation}</td>
						<td className="pl-3 text-left">{lineup.played}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
