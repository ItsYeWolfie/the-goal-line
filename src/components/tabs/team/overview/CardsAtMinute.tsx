import { ITeamStatistics } from '../../../../../types/Team.types';
import SmallTableCell from '../../../table/SmallTableCell';
import TableHeader from '../../../table/TableHeader';

export default function TeamOverviewCardsAtMinute({ cards }: { cards: ITeamStatistics['cards'] }) {
	return (
		<table className="bg-neutral-700 uppercase">
			<thead className="bg-neutral-800 text-sm">
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
			</thead>
			<tbody className="text-xs">
				{Object.keys(cards.red).map((minute: string, index) => (
					<tr
						className={index % 2 === 0 ? 'bg-neutral-600' : ''}
						key={minute}
					>
						<SmallTableCell className="w-48">{minute}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.yellow[minute].total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.yellow[minute].percentage || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.red[minute].total || '-'}</SmallTableCell>
						<SmallTableCell className="text-center">{cards.red[minute].percentage || '-'}</SmallTableCell>
					</tr>
				))}
			</tbody>
		</table>
	);
}
