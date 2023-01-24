import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewSequences({ biggest }: { biggest: ITeamStatistics['biggest'] }) {
	const { wins, goals, loses, streak } = biggest;
	return (
		<table className="w-full bg-neutral-700">
			<thead className="bg-neutral-800">
				<tr>
					<TableHeader
						className="py-1 pl-3 text-left"
						colSpan={100}
					>
						Sequences
					</TableHeader>
				</tr>
			</thead>

			<tbody className="divide-y divide-neutral-500 text-xs">
				<tr>
					<SmallTableCell className="w-64">Most goals scored (Home)</SmallTableCell>
					<SmallTableCell>{goals.for.home || '-'}</SmallTableCell>
				</tr>

				<tr className="bg-neutral-600">
					<SmallTableCell>Most goals scored (Away)</SmallTableCell>
					<SmallTableCell>{goals.for.away || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Most goals conceded (Home)</SmallTableCell>
					<SmallTableCell>{goals.against.home || '-'}</SmallTableCell>
				</tr>

				<tr className="bg-neutral-600">
					<SmallTableCell>Most goals conceded (Away)</SmallTableCell>
					<SmallTableCell>{goals.against.away || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Biggest Win (Home)</SmallTableCell>
					<SmallTableCell>{wins.home || '-'}</SmallTableCell>
				</tr>
				<tr className="bg-neutral-600">
					<SmallTableCell>Biggest Win (Away)</SmallTableCell>
					<SmallTableCell>{wins.away || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Biggest Loss (Home)</SmallTableCell>
					<SmallTableCell>{loses.home || '-'}</SmallTableCell>
				</tr>

				<tr className="bg-neutral-600">
					<SmallTableCell>Biggest Loss (Away)</SmallTableCell>
					<SmallTableCell>{loses.away || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Most Matches Won in a Row</SmallTableCell>
					<SmallTableCell>{streak.wins || '-'}</SmallTableCell>
				</tr>
				<tr className="bg-neutral-600">
					<SmallTableCell>Most Matches Lost in a Row</SmallTableCell>
					<SmallTableCell>{streak.loses || '-'}</SmallTableCell>
				</tr>
				<tr>
					<SmallTableCell>Most Matches With a Draw in a Row</SmallTableCell>
					<SmallTableCell>{streak.draws || '-'}</SmallTableCell>
				</tr>
			</tbody>
		</table>
	);
}
