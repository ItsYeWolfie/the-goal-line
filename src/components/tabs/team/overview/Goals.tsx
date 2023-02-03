import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewGoals({ goals }: { goals: ITeamStatistics['goals'] }) {
	return (
		<table className="bg-gray-700 uppercase">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Total Goals</TableHeader>
					<TableHeader className="py-1 px-3">Scored</TableHeader>
					<TableHeader className="py-1 px-3">Received</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-xs">
				<TableRow even>
					<SmallTableCell>Home</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.home || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Away</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.away || '-'}</SmallTableCell>
				</TableRow>
			</tbody>
			<tfoot className="border-t bg-gray-400 text-xs dark:bg-gray-800">
				<tr>
					<SmallTableCell>Total</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.total.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.total.total || '-'}</SmallTableCell>
				</tr>
			</tfoot>
		</table>
	);
}
