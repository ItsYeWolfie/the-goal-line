import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

export function TeamLeagueStandingsLoader() {
	return (
		<table>
			<TableHead>
				<tr>
					<SmallTableCellLoading colSpan={2} />
				</tr>
			</TableHead>
			<tbody className="text-xs">
				{Array(6)
					.fill(0)
					.map((_, index) => (
						<TableRow key={index}>
							<SmallTableCellLoading colSpan={2} />
						</TableRow>
					))}
			</tbody>
		</table>
	);
}

export default function TeamStandingsLoader() {
	return (
		<table className="basis-8/12">
			<TableHead className="sticky top-0">
				<tr>
					<TableHeader className="px-6 py-3">#</TableHeader>
					<TableHeader className="p-3 text-left">Team</TableHeader>
					<TableHeader className="p-3 text-left">MP</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">W</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">D</TableHeader>
					<TableHeader className="hidden p-3 text-left md:table-cell">L</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">GF</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">GA</TableHeader>
					<TableHeader className="p-3 text-left">PTS</TableHeader>
					<TableHeader className="hidden p-3 text-left sm:table-cell">Form</TableHeader>
				</tr>
			</TableHead>
			<tbody className="text-sm text-gray-300">
				{Array(20)
					.fill(0)
					.map((_, index) => (
						<TableRow key={index}>
							<SmallTableCellLoading colSpan={10} />
						</TableRow>
					))}
			</tbody>
		</table>
	);
}
