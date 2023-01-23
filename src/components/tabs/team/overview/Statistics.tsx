import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewStatistics({
	cleanSheet,
	failedToScore,
}: {
	cleanSheet: ITeamStatistics['clean_sheet'];
	failedToScore: ITeamStatistics['failed_to_score'];
}) {
	return (
		<table className="w-full bg-neutral-700">
			<thead className="bg-neutral-800 text-sm uppercase">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Statistics</TableHeader>
					<TableHeader className="py-1 px-3">Home</TableHeader>
					<TableHeader className="py-1 px-3">Away</TableHeader>
					<TableHeader className="py-1 px-3">Total</TableHeader>
				</tr>
			</thead>
			<tbody className="text-xs">
				<tr>
					<SmallTableCell>Matches With a Clean Sheet</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{cleanSheet.total || '-'}</SmallTableCell>
				</tr>
				<tr className="bg-neutral-600">
					<SmallTableCell>Matches Without Scoring</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{failedToScore.total || '-'}</SmallTableCell>
				</tr>
			</tbody>
		</table>
	);
}
