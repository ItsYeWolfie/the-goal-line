import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHead from '../../../table/TableHead';
import TableHeader from '../../../table/TableHeader';
import TableRow from '../../../table/TableRow';

export default function TeamOverviewCardsAtMinute({ cards }: { cards: ITeamStatistics['cards'] }) {
	return (
		<table className="uppercase">
			<TableHead>
				<tr>
					<TableHeader className="py-1 pl-3 text-left">Cards at Minute</TableHeader>
					<TableHeader
						className="py-1 text-center"
						colSpan={2}
					>
						Yellow
					</TableHeader>
					<TableHeader
						className="py-1 text-center"
						colSpan={2}
					>
						Red
					</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-xs">
				{Object.keys(cards.red).map((minute: string, index) => (
					<TableRow
						even={index % 2 === 0}
						key={minute}
					>
						<SmallTableCell className="w-48">{minute}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.yellow[minute].total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.yellow[minute].percentage || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.red[minute].total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.red[minute].percentage || '-'}</SmallTableCell>
					</TableRow>
				))}
			</tbody>
		</table>
	);
}
