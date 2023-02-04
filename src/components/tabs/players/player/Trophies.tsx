import { ITrophy } from '../../../../types/Trophy.types';
import TableHead from '../../../table/Head';
import TableHeader from '../../../table/Header';
import TableRow from '../../../table/Row';
import SmallTableCell from '../../../table/SmallCell';

export default function PlayerTrophies({ trophies }: { trophies: ITrophy[] }) {
	return (
		<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
			<header className="py-3 text-xl font-medium">Career Trophies</header>
			<table className="w-full">
				<TableHead className="text-left text-xs">
					<tr>
						<TableHeader className="pl-3">Season</TableHeader>
						<TableHeader className="hidden pl-3 sm:table-cell">Country</TableHeader>
						<TableHeader className="pl-3">League</TableHeader>
						<TableHeader className="px-3">Place</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm">
					{trophies.map((trophy, index) => (
						<TableRow
							key={new Date(trophy.season + trophy.place).getTime()}
							even={index % 2 === 0}
						>
							<SmallTableCell>{trophy.season}</SmallTableCell>
							<SmallTableCell className="hidden sm:table-cell">{trophy.country}</SmallTableCell>
							<SmallTableCell>
								{trophy.league}
								<span className="ml-2 block text-gray-500 sm:hidden">{trophy.country}</span>
							</SmallTableCell>
							<SmallTableCell>{trophy.place}</SmallTableCell>
						</TableRow>
					))}
				</tbody>
			</table>
		</div>
	);
}
