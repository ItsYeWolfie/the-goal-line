import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewGoalsAverage({ goals }: { goals: ITeamStatistics['goals'] }) {
	return (
		<table className="bg-neutral-700 uppercase">
			<thead className="bg-neutral-800 text-sm">
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Average Goals Per Match</TableHeader>
					<TableHeader className="py-1 pl-3">Home</TableHeader>
					<TableHeader className="py-1 pl-3">Away</TableHeader>
					<TableHeader className="py-1 px-3">Total</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr>
					<SmallTableCell className="py-2 pl-3">Scored</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.total || '-'}</SmallTableCell>
				</tr>
				<tr className="bg-neutral-600">
					<SmallTableCell>Received</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.total || '-'}</SmallTableCell>
				</tr>
			</tbody>
		</table>
	);
}
