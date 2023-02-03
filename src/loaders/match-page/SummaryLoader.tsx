export default function SummaryLoader() {
	return (
		<div className="mx-auto flex w-full flex-col rounded-md border border-slate-300 bg-gray-200 py-6 dark:border-slate-700 dark:bg-gray-800 md:w-4/5 lg:w-full">
			{[...Array(8)].map((_, i) => (
				<div
					className="mb-6 flex w-full animate-pulse justify-around"
					key={i}
				>
					<span className="flex h-1.5 w-10 rounded-md bg-slate-400 dark:bg-slate-600" />
					<span className="flex h-1.5 w-40 rounded-md bg-slate-400 dark:bg-slate-600" />
					<span className="flex h-6 w-6 rounded-md bg-slate-400 dark:bg-slate-600" />
					<span className="flex h-1.5 w-40 rounded-md bg-slate-400 dark:bg-slate-600" />
				</div>
			))}
		</div>
	);
}
