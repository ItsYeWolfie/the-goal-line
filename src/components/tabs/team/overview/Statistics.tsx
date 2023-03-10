import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewStatistics({
	cleanSheet,
	failedToScore,
}: {
	cleanSheet: ITeamStatistics['clean_sheet'];
	failedToScore: ITeamStatistics['failed_to_score'];
}) {
	return (
		<table className="w-full bg-gray-700">
			<TableHead className="text-xs">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Statistics</TableHeader>
					<TableHeader className="py-1 px-3">Home</TableHeader>
					<TableHeader className="py-1 px-3">Away</TableHeader>
					<TableHeader className="py-1 px-3">Total</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm">
				<TableRow even>
					<SmallTableCell>Matches With a Clean Sheet</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.total || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Matches Without Scoring</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.total || '-'}</SmallTableCell>
				</TableRow>
			</tbody>
		</table>
	);
}
