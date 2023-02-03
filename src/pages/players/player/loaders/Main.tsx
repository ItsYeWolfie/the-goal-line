import { useEffect, useContext } from 'react';
import SelectLoading from '../../../../components/select/SelectLoading';
import TableHead from '../../../../components/table/Head';
import TableHeader from '../../../../components/table/Header';
import TableRow from '../../../../components/table/Row';
import SmallTableCellLoading from '../../../../components/table/SmallCellLoading';
import { GlobalHeaderContext } from '../../../../contexts/GlobalHeader.context';

export default function PlayerMainLoading() {
	const { setBreadcrumbs } = useContext(GlobalHeaderContext);
	useEffect(() => {
		setBreadcrumbs([
			{
				name: (
					<div className="flex items-center gap-2">
						<div className="h-6 w-6 animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" />
						<span className="h-6 w-32 animate-pulse rounded-lg bg-gray-400 dark:bg-gray-600" />
					</div>
				),
				href: '',
			},
		]);
	}, [setBreadcrumbs]);

	return (
		<main className="mx-auto flex flex-col gap-y-16 lg:max-w-4xl">
			<section className="grid grid-cols-12 items-start gap-2 xl:items-stretch">
				<div className="col-span-full flex flex-none flex-col overflow-auto rounded-lg border border-gray-400 dark:border-gray-600 sm:col-span-6 md:col-span-4">
					<div className="flex justify-evenly px-4">
						<div className="flex w-3/12 shrink-0 grow-0 flex-col justify-evenly">
							<div className="h-10 w-full animate-pulse bg-gray-400 dark:bg-gray-600" />
							<div className="h-16 w-full animate-pulse rounded-full bg-gray-400 dark:bg-gray-600" />
						</div>
						<div className="h-40 w-7/12 shrink-0 grow-0 animate-pulse bg-gray-400 dark:bg-gray-600" />
					</div>
					<h1 className="flex justify-center bg-blue-700 py-2 text-center text-sm">
						<span className="h-6 w-6/12 animate-pulse rounded-lg bg-gray-400 dark:bg-gray-600" />
					</h1>

					<div className="flex flex-col text-sm">
						{...['Name', 'Age', 'Nationality', 'Height', 'Weight'].map((item) => (
							<div
								className="flex justify-between gap-2 rounded-lg py-1 px-2 text-sm"
								key={item}
							>
								<p className="capitalize text-gray-600 dark:text-gray-400">{item}</p>
								<p className="h-4 w-6/12 animate-pulse bg-gray-400 dark:bg-gray-600" />
							</div>
						))}
					</div>
				</div>
				<div className="col-span-full flex flex-none animate-pulse flex-col gap-2 rounded-md bg-gray-400 dark:bg-gray-600 sm:col-span-6 sm:row-span-2 md:col-span-4 md:col-start-5 md:row-span-1" />
				<div className="col-span-full flex flex-col gap-4 sm:col-span-6 sm:col-start-1 sm:row-span-1 sm:row-start-2 md:col-span-4 md:col-start-9 md:row-start-1">
					<SelectLoading />
					<div className="h-72 w-full animate-pulse bg-gray-400 dark:bg-gray-600 md:h-[17rem]" />
				</div>
				{...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
					<div
						className="col-span-6 flex h-24 w-full flex-none animate-pulse flex-col gap-2 rounded-md bg-gray-400 dark:bg-gray-600 md:col-span-2"
						key={item}
					/>
				))}
			</section>
			<div className="mx-auto flex w-full flex-col gap-y-4">
				<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
					<header className="py-3 text-xl font-medium">Transfers</header>
					<table className="w-full">
						<TableHead className="text-left text-xs">
							<tr>
								<TableHeader className="pl-3">Date</TableHeader>
								<TableHeader className="pl-3">From</TableHeader>
								<TableHeader className="hidden pl-3 sm:table-cell">Type</TableHeader>
								<TableHeader className="px-3">To</TableHeader>
							</tr>
						</TableHead>
						<tbody className="text-sm">
							{[...Array(5)].map((_, i) => (
								<TableRow key={i}>
									<SmallTableCellLoading colSpan={6} />
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
				<div className="rounded-lg bg-gray-300 p-2 dark:bg-gray-700">
					<header className="py-3 text-xl font-medium">Injury History</header>
					<table className="w-full">
						<TableHead className="text-left text-xs">
							<tr>
								<TableHeader className="pl-3">Date</TableHeader>
								<TableHeader className="hidden pl-3 sm:table-cell">Type</TableHeader>
								<TableHeader className="pl-3">Reason</TableHeader>
								<TableHeader className="hidden px-3 sm:table-cell">Playing Team</TableHeader>
							</tr>
						</TableHead>
						<tbody className="text-sm">
							{[...Array(5)].map((_, i) => (
								<TableRow key={i}>
									<SmallTableCellLoading colSpan={6} />
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
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
							{[...Array(5)].map((_, i) => (
								<TableRow key={i}>
									<SmallTableCellLoading colSpan={6} />
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
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
							{[...Array(5)].map((_, i) => (
								<TableRow key={i}>
									<SmallTableCellLoading colSpan={6} />
								</TableRow>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}
