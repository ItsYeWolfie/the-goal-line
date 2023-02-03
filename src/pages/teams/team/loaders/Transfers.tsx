import SelectLoading from '../../../../components/select/SelectLoading';
import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

function PlayerTransfersTableLoading({ side }: { side: string }) {
	return (
		<table className="w-full">
			<TableHead className="sticky top-0 text-xs">
				<tr>
					<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">Date</TableHeader>
					<TableHeader className="px-3 py-1 text-left">Player</TableHeader>
					<TableHeader className="px-3 py-1 text-left">{side}</TableHeader>
					<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">Type</TableHeader>
				</tr>
			</TableHead>
			<tbody className="overflow-auto text-xs md:max-h-96">
				{[...Array(10)].map((_, index) => (
					<TableRow key={index}>
						<SmallTableCellLoading colSpan={4} />
					</TableRow>
				))}
			</tbody>
		</table>
	);
}

export default function TeamTransfersPageLoading() {
	return (
		<>
			<section className="mb-8">
				<header className="mb-2 font-medium uppercase">Transfer History</header>
				<div className="flex flex-wrap gap-8">
					<SelectLoading
						title="Year"
						width="w-32"
					/>
					<SelectLoading
						title="Type"
						width="w-32"
					/>
				</div>
			</section>
			<section className="flex flex-col justify-between gap-8 lg:flex-row">
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-green-500">Transfers In</header>
					<PlayerTransfersTableLoading side="From" />
				</div>
				<div className="lg:basis-1/2">
					<header className="mb-2 text-lg font-medium uppercase tracking-tight text-red-500">Transfers Out</header>
					<PlayerTransfersTableLoading side="To" />
				</div>
			</section>
		</>
	);
}
