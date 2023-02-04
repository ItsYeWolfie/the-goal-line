import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

export default function TeamInjuriesLoader() {
	return (
		<table className="w-full text-xs">
			<TableHead className="text-left">
				<tr>
					<TableHeader className="px-3 py-1">Date</TableHeader>
					<TableHeader className="px-3 py-1">Player</TableHeader>
					<TableHeader className="px-3 py-1">Type</TableHeader>
					<TableHeader className="hidden px-3 py-1 lg:table-cell">Reason</TableHeader>
					<TableHeader className="hidden px-3 py-1 sm:table-cell">League</TableHeader>
					<TableHeader className="hidden px-3 py-1 lg:table-cell">Season</TableHeader>
				</tr>
			</TableHead>
			<tbody>
				{[...Array(12)].map((_, index) => (
					<TableRow key={index}>
						<SmallTableCellLoading colSpan={6} />
					</TableRow>
				))}
			</tbody>
		</table>
	);
}
