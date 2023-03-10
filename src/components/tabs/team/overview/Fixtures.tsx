import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

export default function TeamOverviewFixtures({ fixtures }: { fixtures: ITeamStatistics['fixtures'] }) {
	const { wins, draws, loses, played } = fixtures;
	return (
		<div className="min-w-full max-w-full overflow-x-auto">
			<table className="w-full bg-gray-100 text-xs uppercase dark:bg-gray-700">
				<TableHead>
					<tr>
						<TableHeader className="py-1 px-3 text-left">Fixtures</TableHeader>
						<TableHeader className="py-1 px-3">Wins</TableHeader>
						<TableHeader className="py-1 px-3">Draws</TableHeader>
						<TableHeader className="py-1 px-3">Loses</TableHeader>
						<TableHeader className="py-1 px-3">Played</TableHeader>
					</tr>
				</TableHead>

				<tbody className="text-sm">
					<TableRow even>
						<SmallTableCell>Home</SmallTableCell>
						<SmallTableCell className="text-center">{wins.home || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{draws.home || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{loses.home || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{played.home || '-'}</SmallTableCell>
					</TableRow>
					<TableRow>
						<SmallTableCell>Away</SmallTableCell>
						<SmallTableCell className="text-center">{wins.away || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{draws.away || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{loses.away || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{played.away || '-'}</SmallTableCell>
					</TableRow>
				</tbody>
				<tfoot className="bg-gray-400 dark:bg-gray-800">
					<tr>
						<SmallTableCell>Total</SmallTableCell>
						<SmallTableCell className="text-center">{wins.total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{draws.total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{loses.total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{played.total || '-'}</SmallTableCell>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}
