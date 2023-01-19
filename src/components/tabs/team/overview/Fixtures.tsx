import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewFixtures({
	fixtures,
}: {
	fixtures: ITeamStatistics['fixtures'];
}) {
	const { wins, draws, loses, played } = fixtures;
	return (
		<table className="w-full bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Fixtures</th>
					<th className="py-1 pl-3">Wins</th>
					<th className="py-1 pl-3">Draws</th>
					<th className="py-1 pl-3">Loses</th>
					<th className="py-1 px-3">Played</th>
				</tr>
			</thead>

			<tbody className="text-xs">
				<tr>
					<td className="py-2 pl-3">Home</td>
					<td className="pl-3 text-center">{wins.home || '-'}</td>
					<td className="pl-3 text-center">{draws.home || '-'}</td>
					<td className="pl-3 text-center">{loses.home || '-'}</td>
					<td className="px-3 text-center">{played.home || '-'}</td>
				</tr>
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Away</td>
					<td className="pl-3 text-center">{wins.away || '-'}</td>
					<td className="pl-3 text-center">{draws.away || '-'}</td>
					<td className="pl-3 text-center">{loses.away || '-'}</td>
					<td className="px-3 text-center">{played.away || '-'}</td>
				</tr>
			</tbody>
			<tfoot className="bg-gray-800 text-xs">
				<tr className="border-t">
					<td className="py-2 pl-3">Total</td>
					<td className="pl-3 text-center">{wins.total || '-'}</td>
					<td className="pl-3 text-center">{draws.total || '-'}</td>
					<td className="pl-3 text-center">{loses.total || '-'}</td>
					<td className="px-3 text-center">{played.total || '-'}</td>
				</tr>
			</tfoot>
		</table>
	);
}
