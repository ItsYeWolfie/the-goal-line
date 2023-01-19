import { ITeamStatistics } from '../../../../../types/Team.types';

export default function TeamOverviewGoalsAtMinute({
	goals,
}: {
	goals: ITeamStatistics['goals'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<th className="py-1 pl-3 text-left">Goals at Minute</th>
					<th
						className="py-1 text-center"
						colSpan={2}>
						Scored
					</th>
					<th
						className="py-1 pr-3 text-center"
						colSpan={2}>
						Received
					</th>
				</tr>
			</thead>
			<tbody className="text-xs">
				{Object.keys(goals.for.minute).map((minute: string, index) => {
					return (
						<tr
							className={index % 2 === 0 ? 'bg-gray-600' : ''}
							key={minute}>
							<td className="w-48 py-2 pl-3">{minute}</td>
							<td className="pl-3 text-center">
								{goals.for.minute[minute].total || '-'}
							</td>
							<td className="pl-3 text-center">
								{goals.for.minute[minute].percentage || '-'}
							</td>
							<td className="pl-3 text-center">
								{goals.against.minute[minute].total || '-'}
							</td>
							<td className="px-3 text-center">
								{goals.against.minute[minute].percentage || '-'}
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
