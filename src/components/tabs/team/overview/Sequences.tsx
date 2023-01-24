import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHead from '../../../table/TableHead';
import TableHeader from '../../../table/TableHeader';
import TableRow from '../../../table/TableRow';

export default function TeamOverviewSequences({ biggest }: { biggest: ITeamStatistics['biggest'] }) {
	const { wins, goals, loses, streak } = biggest;
	return (
		<table className="w-full bg-neutral-700 text-xs">
			<TableHead>
				<tr>
					<TableHeader
						className="py-1 pl-3 text-left"
						colSpan={100}
					>
						Sequences
					</TableHeader>
				</tr>
			</TableHead>

			<tbody>
				<TableRow even>
					<SmallTableCell className="w-64">Most goals scored (Home)</SmallTableCell>
					<SmallTableCell>{goals.for.home || '-'}</SmallTableCell>
				</TableRow>

				<TableRow>
					<SmallTableCell>Most goals scored (Away)</SmallTableCell>
					<SmallTableCell>{goals.for.away || '-'}</SmallTableCell>
				</TableRow>
				<TableRow even>
					<SmallTableCell>Most goals conceded (Home)</SmallTableCell>
					<SmallTableCell>{goals.against.home || '-'}</SmallTableCell>
				</TableRow>

				<TableRow>
					<SmallTableCell>Most goals conceded (Away)</SmallTableCell>
					<SmallTableCell>{goals.against.away || '-'}</SmallTableCell>
				</TableRow>
				<TableRow even>
					<SmallTableCell>Biggest Win (Home)</SmallTableCell>
					<SmallTableCell>{wins.home || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Biggest Win (Away)</SmallTableCell>
					<SmallTableCell>{wins.away || '-'}</SmallTableCell>
				</TableRow>
				<TableRow even>
					<SmallTableCell>Biggest Loss (Home)</SmallTableCell>
					<SmallTableCell>{loses.home || '-'}</SmallTableCell>
				</TableRow>

				<TableRow>
					<SmallTableCell>Biggest Loss (Away)</SmallTableCell>
					<SmallTableCell>{loses.away || '-'}</SmallTableCell>
				</TableRow>
				<TableRow even>
					<SmallTableCell>Most Matches Won in a Row</SmallTableCell>
					<SmallTableCell>{streak.wins || '-'}</SmallTableCell>
				</TableRow>
				<TableRow>
					<SmallTableCell>Most Matches Lost in a Row</SmallTableCell>
					<SmallTableCell>{streak.loses || '-'}</SmallTableCell>
				</TableRow>
				<TableRow even>
					<SmallTableCell>Most Matches With a Draw in a Row</SmallTableCell>
					<SmallTableCell>{streak.draws || '-'}</SmallTableCell>
				</TableRow>
			</tbody>
		</table>
	);
}
