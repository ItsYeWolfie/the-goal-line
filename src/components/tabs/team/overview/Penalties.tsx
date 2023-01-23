import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewPenalties({
	scored,
	missed,
}: {
	scored: ITeamStatistics['penalty']['scored'];
	missed: ITeamStatistics['penalty']['missed'];
}) {
	return (
		<table className="bg-neutral-700 uppercase">
			<thead className="bg-neutral-800 text-sm">
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Penalties</TableHeader>
					<TableHeader className="py-1 pl-3">Total</TableHeader>
					<TableHeader className="py-1 px-3">Percentage</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr className="bg-neutral-600">
					<SmallTableCell>Scored</SmallTableCell>
					<SmallTableCell className="text-center">{scored.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{scored.percentage || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Missed</SmallTableCell>
					<SmallTableCell className="text-center">{missed.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{missed.percentage || '-'}</SmallTableCell>
				</tr>
			</tbody>
		</table>
	);
}
