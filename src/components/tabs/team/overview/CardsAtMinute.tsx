import { ITeamStatistics } from '../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallCell';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';

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
