import SelectLoading from '../../../../components/select/SelectLoading';
import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

export default function TeamFixturesPageLoader() {
	return (
		<>
			<div className="mb-2 flex flex-col justify-between gap-4 md:mb-8 md:flex-row md:items-center">
				<div className="flex items-center gap-4">
					<SelectLoading title="Select League" />
				</div>
			</div>
			<table className="min-w-full">
				<TableHead className="sticky top-0 text-left text-xs">
					<tr>
						<TableHeader className="p-3 md:table-cell">Opponent</TableHeader>
						<TableHeader className="hidden p-3 lg:table-cell">Round</TableHeader>
						<TableHeader className="hidden p-3 md:table-cell">Date</TableHeader>
						<TableHeader className="hidden p-3 md:table-cell">Side</TableHeader>
						<TableHeader className="p-3 md:table-cell">Status</TableHeader>
						<TableHeader className="p-3  md:table-cell">Result</TableHeader>
					</tr>
				</TableHead>

				<tbody className="text-sm text-gray-300">
					{[...Array(10)].map((_, i) => (
						<TableRow key={i}>
							<SmallTableCellLoading colSpan={6} />
						</TableRow>
					))}
				</tbody>
			</table>
		</>
	);
}
