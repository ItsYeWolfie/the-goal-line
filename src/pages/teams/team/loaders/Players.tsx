import { faFutbol, faRug, faShirt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectLoading from '../../../../components/select/SelectLoading';
import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

function TeamPlayersLoadingTable({ title }: { title: string }) {
	return (
		<article className="mb-2">
			<header className="mb-2 text-xl font-medium text-gray-700 dark:text-gray-300">{title}</header>
			<table className="w-full text-sm">
				<TableHead>
					<tr>
						<TableHeader className="px-3 py-1 text-left sm:pl-6">Name</TableHeader>
						<TableHeader className="px-3 text-center">Age</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faShirt} />
						</TableHeader>
						<TableHeader className="px-3 text-center">
							<FontAwesomeIcon icon={faFutbol} />
						</TableHeader>
						<TableHeader className="hidden px-3 text-center sm:table-cell">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-yellow-500"
							/>
						</TableHeader>
						<TableHeader className="hidden px-3 text-center sm:table-cell">
							<FontAwesomeIcon
								icon={faRug}
								className="rotate-90 text-red-500"
							/>
						</TableHeader>
					</tr>
				</TableHead>
				<tbody className="text-sm text-gray-700 dark:text-gray-300">
					{Array(5)
						.fill(0)
						.map((_, index) => (
							<TableRow key={index}>
								<SmallTableCellLoading colSpan={6} />
							</TableRow>
						))}
				</tbody>
			</table>
		</article>
	);
}

export default function TeamPlayersLoader() {
	return (
		<>
			<div className="sticky top-0 z-10 mb-4">
				<SelectLoading title="League" />
			</div>
			<section className="flex flex-col gap-4 md:flex-row">
				<aside className="flex basis-1/2 flex-col gap-4">
					{['Goalkeepers', 'Defenders'].map((title) => (
						<TeamPlayersLoadingTable
							title={title}
							key={title}
						/>
					))}
				</aside>
				<aside className="flex basis-1/2 flex-col gap-4">
					{['Midfielders', 'Forwards'].map((title) => (
						<TeamPlayersLoadingTable
							title={title}
							key={title}
						/>
					))}
				</aside>
			</section>
		</>
	);
}
