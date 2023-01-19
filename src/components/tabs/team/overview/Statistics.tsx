import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewStatistics({
	cleanSheet,
	failedToScore,
}: {
	cleanSheet: ITeamStatistics['clean_sheet'];
	failedToScore: ITeamStatistics['failed_to_score'];
}) {
	return (
		<table className="w-full bg-gray-700">
			<thead className="bg-gray-800 text-sm uppercase">
				<tr>
					<th className="py-1 pl-3 text-left">Statistics</th>
					<th className="py-1 pl-3">Home</th>
					<th className="py-1 pl-3">Away</th>
					<th className="py-1 px-3">Total</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr>
					<td className="py-2 pl-3">Matches With a Clean Sheet</td>
					<td className="pl-3 text-center">{cleanSheet.home || '-'}</td>
					<td className="pl-3 text-center">{cleanSheet.away || '-'}</td>
					<td className="pl-3 text-center">{cleanSheet.total || '-'}</td>
				</tr>
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Matches Without Scoring</td>
					<td className="pl-3 text-center">{failedToScore.home || '-'}</td>
					<td className="pl-3 text-center">{failedToScore.away || '-'}</td>
					<td className="pl-3 text-center">{failedToScore.total || '-'}</td>
				</tr>
			</tbody>
		</table>
	);
}
