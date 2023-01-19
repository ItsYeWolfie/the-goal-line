import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewSequences({
	biggest,
}: {
	biggest: ITeamStatistics['biggest'];
}) {
	const { wins, goals, loses, streak } = biggest;
	return (
		<table className="w-full bg-gray-700">
			<thead className="bg-gray-800">
				<tr>
					<th
						className="py-1 pl-3 text-left uppercase"
						colSpan={100}>
						Sequences
					</th>
				</tr>
			</thead>

			<tbody className="divide-y divide-gray-500 text-xs">
				<tr>
					<td className="w-56 py-2 pl-3">Most goals scored (Home)</td>
					<td className="px-3">{goals.for.home || '-'}</td>
				</tr>

				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Most goals scored (Away)</td>
					<td className="px-3">{goals.for.away || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Most goals conceded (Home)</td>
					<td className="px-3">{goals.against.home || '-'}</td>
				</tr>

				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Most goals conceded (Away)</td>
					<td className="px-3">{goals.against.away || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Biggest Win (Home)</td>
					<td className="px-3">{wins.home || '-'}</td>
				</tr>
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Biggest Win (Away)</td>
					<td className="px-3">{wins.away || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Biggest Loss (Home)</td>
					<td className="px-3">{loses.home || '-'}</td>
				</tr>

				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Biggest Loss (Away)</td>
					<td className="px-3">{loses.away || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Most Matches Won in a Row</td>
					<td className="px-3">{streak.wins || '-'}</td>
				</tr>
				<tr className="bg-gray-600">
					<td className="py-2 pl-3">Most Matches Lost in a Row</td>
					<td className="px-3">{streak.loses || '-'}</td>
				</tr>
				<tr>
					<td className="py-2 pl-3">Most Matches With a Draw in a Row</td>
					<td className="px-3">{streak.draws || '-'}</td>
				</tr>
			</tbody>
		</table>
	);
}
