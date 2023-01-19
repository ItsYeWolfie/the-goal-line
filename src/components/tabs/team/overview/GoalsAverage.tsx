import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewGoalsAverage({
	goals,
}: {
	goals: ITeamStatistics['goals'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Average Goals Per Match</th>
					<th className="py-1 pl-3">Home</th>
					<th className="py-1 pl-3">Away</th>
					<th className="py-1 px-3">Total</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr>
					<td className="py-2 pl-3">Scored</td>
					<td className="pl-3 text-center">{goals.for.average.home || '-'}</td>
					<td className="pl-3 text-center">{goals.for.average.away || '-'}</td>
					<td className="pl-3 text-center">{goals.for.average.total || '-'}</td>
				</tr>
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Received</td>
					<td className="pl-3 text-center">
						{goals.against.average.home || '-'}
					</td>
					<td className="pl-3 text-center">
						{goals.against.average.away || '-'}
					</td>
					<td className="pl-3 text-center">
						{goals.against.average.total || '-'}
					</td>
				</tr>
			</tbody>
		</table>
	);
}
