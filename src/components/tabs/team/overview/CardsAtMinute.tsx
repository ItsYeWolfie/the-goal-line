import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewCardsAtMinute({
	cards,
}: {
	cards: ITeamStatistics['cards'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Cards at Minute</th>
					<th
						className="py-1 text-center"
						colSpan={2}>
						Yellow
					</th>
					<th
						className="py-1 text-center"
						colSpan={2}>
						Red
					</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				{Object.keys(cards.red).map((minute: string, index) => (
					<tr
						className={index % 2 === 0 ? 'bg-gray-600' : ''}
						key={minute}>
						<td className="w-48 py-2 pl-3">{minute}</td>
						<td className="pl-3 text-center">
							{cards.yellow[minute].total || '-'}
						</td>
						<td className="pl-3 text-center">
							{cards.yellow[minute].percentage || '-'}
						</td>
						<td className="pl-3 text-center">
							{cards.red[minute].total || '-'}
						</td>
						<td className="px-3 text-center">
							{cards.red[minute].percentage || '-'}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
