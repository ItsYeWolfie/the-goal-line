import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewGoalsAtMinute({ goals }: { goals: ITeamStatistics['goals'] }) {
	return (
		<table className="uppercase">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Goals at Minute</TableHeader>
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
			</TableHead>
			<tbody className="text-sm">
				{Object.keys(goals.for.minute).map((minute: string, index) => {
					return (
						<TableRow
							key={minute}
							even={index % 2 === 0}
						>
							<SmallTableCell className="w-48">{minute}</SmallTableCell>
							<SmallTableCell className="text-center">{goals.for.minute[minute].total || '-'}</SmallTableCell>
							<SmallTableCell className="text-center">{goals.for.minute[minute].percentage || '-'}</SmallTableCell>
							<SmallTableCell className="text-center">{goals.against.minute[minute].total || '-'}</SmallTableCell>
							<SmallTableCell className="text-center">{goals.against.minute[minute].percentage || '-'}</SmallTableCell>
						</TableRow>
					);
				})}
			</tbody>
		</table>
	);
}
