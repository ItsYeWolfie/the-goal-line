import { ISideline } from '../../../../types/Sidelines.types';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';
import SmallTableCell from '../../../table/SmallCell';

export default function PlayerSidelines({ sidelines }: { sidelines: ISideline[] }) {
	return (
		<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
			<header className="py-3 text-xl font-medium">Player&apos;s Sidelines</header>
			<table className="w-full">
				<TableHead className="text-left text-xs">
					<tr>
						<TableHeader className="pl-3">Start</TableHeader>
						<TableHeader className="pl-3">Type</TableHeader>
						<TableHeader className="px-3">End</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm">
					{sidelines.map((sideline, index) => (
						<TableRow
							key={new Date(sideline.start).getTime()}
							even={index % 2 === 0}
						>
							<SmallTableCell className="pl-3">{new Date(sideline.start).toLocaleDateString()}</SmallTableCell>
							<SmallTableCell className="pl-3">{sideline.type}</SmallTableCell>
							<SmallTableCell className="px-3">
								{sideline.end ? new Date(sideline.end).toLocaleDateString() : 'Still'}
							</SmallTableCell>
						</TableRow>
					))}
				</tbody>
			</table>
		</div>
	);
}
