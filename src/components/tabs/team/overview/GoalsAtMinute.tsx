import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewGoalsAtMinute({
	goals,
}: {
	goals: ITeamStatistics['goals'];
}) {
	return (
		<table className="bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<TableHeader className="py-1 px-3 text-left">
						Goals at Minute
					</TableHeader>
					<TableHeader
						className="py-1 text-center"
						colSpan={2}
					>
						Scored
					</TableHeader>
					<TableHeader
						className="py-1 px-3 text-center"
						colSpan={2}
					>
						Received
					</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				{Object.keys(goals.for.minute).map((minute: string, index) => {
					return (
						<tr
							className={index % 2 === 0 ? 'bg-gray-600' : ''}
							key={minute}
						>
							<SmallTableCell className="w-48">{minute}</SmallTableCell>
							<SmallTableCell className="text-center">
								{goals.for.minute[minute].total || '-'}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{goals.for.minute[minute].percentage || '-'}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{goals.against.minute[minute].total || '-'}
							</SmallTableCell>
							<SmallTableCell className="text-center">
								{goals.against.minute[minute].percentage || '-'}
							</SmallTableCell>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
