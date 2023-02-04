import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';

export default function TeamCoachesLoader() {
	return (
		<section className="flex flex-col justify-between md:h-[50rem]">
			<table className="w-full text-xs">
				<caption className="mb-2 text-left text-lg uppercase">Head Coaches</caption>
				<TableHead className="text-xs">
					<tr>
						<TableHeader className="hidden px-3 py-1 text-left sm:table-cell">
							<span className="sr-only">Set Active Coach Column</span>
						</TableHeader>
						<TableHeader className="px-3 py-1 text-left">Head Coach</TableHeader>
						<TableHeader className="px-3 text-left">Date Joined</TableHeader>
						<TableHeader className="px-3 text-left">Date Left</TableHeader>
						<TableHeader className="hidden px-3 text-left md:table-cell">Duration</TableHeader>
						<TableHeader className="hidden px-3 text-left sm:table-cell">Reason Left</TableHeader>
						<TableHeader className="hidden px-3 text-left md:table-cell">League Wins</TableHeader>
						<TableHeader className="hidden px-3 text-left md:table-cell">Cup Wins</TableHeader>
					</tr>
				</TableHead>
				<tbody>
					{[...Array(6)].map((_, index) => (
						<TableRow key={index}>
							<SmallTableCellLoading colSpan={8} />
						</TableRow>
					))}
				</tbody>
			</table>
			<div className="grid w-full auto-rows-max grid-cols-12 gap-y-8 gap-x-4 px-2 py-4 sm:p-8">
				<div className="col-span-4 row-span-full md:col-span-2 xl:col-span-1">
					<div className="h-full w-full animate-pulse rounded-full bg-gray-400 object-cover dark:bg-gray-600" />
				</div>
				<div className="col-span-8 flex flex-col gap-2 leading-loose sm:col-span-4 lg:col-span-3 xl:col-span-3 xl:border-b xl:border-gray-500">
					<div className="h-6 w-64 animate-pulse bg-gray-400 dark:bg-gray-600" />
					<p className="h-4 w-32 animate-pulse bg-gray-400 dark:bg-gray-600" />
					<p className="h-4 w-32 animate-pulse bg-gray-400 dark:bg-gray-600" />
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">League Wins</header>
						<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Cup Wins</header>
						<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between gap-2 text-center sm:col-span-2 lg:col-span-3 xl:col-span-2">
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Promotions</header>
						<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
					<div className="flex flex-col justify-between gap-2">
						<header className="text-xs uppercase text-gray-600 dark:text-gray-400">Relegations</header>
						<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 sm:col-start-7 md:col-span-3 md:col-start-6 xl:col-span-2">
					<p className="text-xs uppercase text-gray-600 dark:text-gray-400">Major League Honors</p>
					<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
				</div>
				<div className="col-span-6 flex flex-col justify-between text-center sm:col-span-3 md:col-span-3 xl:col-span-2">
					<p className="text-xs uppercase text-gray-600 dark:text-gray-400">Major Cup Honors</p>
					<p className="mx-auto h-4 w-8 animate-pulse bg-gray-400 dark:bg-gray-600" />
				</div>
				<div className="col-span-full flex flex-col sm:col-span-3 xl:col-start-2">
					<header className="mb-2 text-xs uppercase tracking-wider">Overall Head Coach Comparison</header>
					<div className="flex flex-col justify-between gap-2">
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 animate-pulse items-center justify-center  rounded-full bg-green-500 text-center text-xs" />
							<p className="text-xs">Games Won</p>
						</div>
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 animate-pulse items-center  justify-center rounded-full bg-red-500 text-center text-xs" />
							<p className="text-xs">Games Lost</p>
						</div>
						<div className="flex items-center">
							<span className="mr-2 flex h-5 w-5 animate-pulse items-center  justify-center rounded-full bg-yellow-500 text-center text-xs" />
							<p className="text-xs">Games Drawn</p>
						</div>
					</div>
				</div>
				<div className="col-span-full h-64 bg-gray-300 p-2 text-sm dark:bg-gray-700 sm:col-span-8">
					<header className="w-full place-self-start text-xs uppercase">Career Milestones</header>
					<div className="flex h-full flex-col items-center justify-center">
						<p className="h-4 w-32 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
				</div>
			</div>
		</section>
	);
}
