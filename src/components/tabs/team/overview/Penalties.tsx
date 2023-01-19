import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewPenalties({
	scored,
	missed,
}: {
	scored: ITeamStatistics['penalty']['scored'];
	missed: ITeamStatistics['penalty']['missed'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Penalties</th>
					<th className="py-1 pl-3">Total</th>
					<th className="py-1 px-3">Percentage</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Scored</td>
					<td className="pl-3 text-center">{scored.total || '-'}</td>
					<td className="pl-3 text-center">{scored.percentage || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Missed</td>
					<td className="pl-3 text-center">{missed.total || '-'}</td>
					<td className="pl-3 text-center">{missed.percentage || '-'}</td>
				</tr>
			</tbody>
		</table>
	);
}
