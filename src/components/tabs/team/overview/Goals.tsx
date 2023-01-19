import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewGoals({
	goals,
}: {
	goals: ITeamStatistics['goals'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Total Goals</th>
					<th className="py-1 pl-3">Scored</th>
					<th className="py-1 px-3">Received</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr className="bg-gray-600">
					<td className="p-6 py-2 pl-3">Home</td>
					<td className="pl-3 text-center">{goals.for.total.home || '-'}</td>
					<td className="pl-3 text-center">
						{goals.against.total.home || '-'}
					</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Away</td>
					<td className="pl-3 text-center">{goals.for.total.away || '-'}</td>
					<td className="pl-3 text-center">
						{goals.against.total.away || '-'}
					</td>
				</tr>
			</tbody>
			<tfoot className="border-t bg-gray-800 text-xs">
				<tr>
					<td className="py-2 pl-3">Total</td>
					<td className="pl-3 text-center">{goals.for.total.total || '-'}</td>
					<td className="pl-3 text-center">
						{goals.against.total.total || '-'}
					</td>
				</tr>
			</tfoot>
		</table>
	);
}
