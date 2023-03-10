import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewPenalties({
	scored,
	missed,
}: {
	scored: ITeamStatistics['penalty']['scored'];
	missed: ITeamStatistics['penalty']['missed'];
}) {
	return (
		<table className="uppercase">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Penalties</TableHeader>
					<TableHeader className="py-1 pl-3">Total</TableHeader>
					<TableHeader className="py-1 px-3">Percentage</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm">
				<TableRow even>
					<SmallTableCell>Scored</SmallTableCell>
					<SmallTableCell className="text-center">{scored.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{scored.percentage || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Missed</SmallTableCell>
					<SmallTableCell className="text-center">{missed.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{missed.percentage || '-'}</SmallTableCell>
				</TableRow>
			</tbody>
		</table>
	);
}
