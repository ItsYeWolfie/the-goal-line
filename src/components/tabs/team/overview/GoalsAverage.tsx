import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewGoalsAverage({ goals }: { goals: ITeamStatistics['goals'] }) {
	return (
		<table className="uppercase">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Average Goals Per Match</TableHeader>
					<TableHeader className="py-1 pl-3">Home</TableHeader>
					<TableHeader className="py-1 pl-3">Away</TableHeader>
					<TableHeader className="py-1 px-3">Total</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm">
				<TableRow even>
					<SmallTableCell>Scored</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.for.average.total || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Received</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{goals.against.average.total || '-'}</SmallTableCell>
				</TableRow>
			</tbody>
		</table>
	);
}
