import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewGoals({ goals }: { goals: ITeamStatistics['goals'] }) {
	return (
		<table className="bg-neutral-700">
			<thead className="bg-neutral-800 text-sm">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Total Goals</TableHeader>
					<TableHeader className="py-1 px-3">Scored</TableHeader>
					<TableHeader className="py-1 px-3">Received</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs uppercase">
				<tr className="bg-neutral-600">
					<SmallTableCell>Home</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.home || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Away</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.away || '-'}</SmallTableCell>
				</tr>
			</tbody>
			<tfoot className="border-t bg-neutral-800 text-xs">
				<tr>
					<SmallTableCell>Total</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.total || '-'}</SmallTableCell>
				</tr>
			</tfoot>
		</table>
	);
}
