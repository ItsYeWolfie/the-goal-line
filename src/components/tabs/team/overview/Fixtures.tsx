import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewFixtures({ fixtures }: { fixtures: ITeamStatistics['fixtures'] }) {
	const { wins, draws, loses, played } = fixtures;
	return (
		<table className="w-full bg-gray-700 uppercase">
			<thead className="bg-gray-800 text-sm">
				<tr>
					<TableHeader className="py-1 px-3 text-left">Fixtures</TableHeader>
					<TableHeader className="py-1 px-3">Wins</TableHeader>
					<TableHeader className="py-1 px-3">Draws</TableHeader>
					<TableHeader className="py-1 px-3">Loses</TableHeader>
					<TableHeader className="py-1 px-3">Played</TableHeader>
				</tr>
			</thead>

			<tbody className="text-xs">
				<tr>
					<SmallTableCell>Home</SmallTableCell>
					<SmallTableCell className="text-center">{wins.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{draws.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{loses.home || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{played.home || '-'}</SmallTableCell>
				</tr>
				<tr className="bg-gray-600">
					<SmallTableCell>Away</SmallTableCell>
					<SmallTableCell className="text-center">{wins.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{draws.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{loses.away || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{played.away || '-'}</SmallTableCell>
				</tr>
			</tbody>
			<tfoot className="bg-gray-800 text-xs">
				<tr className="border-t">
					<SmallTableCell>Total</SmallTableCell>
					<SmallTableCell className="text-center">{wins.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{draws.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{loses.total || '-'}</SmallTableCell>
					<SmallTableCell className="text-center">{played.total || '-'}</SmallTableCell>
				</tr>
			</tfoot>
		</table>
	);
}
