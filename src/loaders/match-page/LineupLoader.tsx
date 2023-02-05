export default function LineupLoader() {
	return (
		<div className="mx-auto flex h-auto w-full items-center justify-around rounded-md border border-slate-300 bg-gray-200 p-3 shadow dark:border-slate-700 dark:bg-gray-700">
			<span className="hidden h-10 w-10 animate-pulse rounded-full bg-slate-300 dark:bg-slate-800 md:flex" />
			<span className="flex animate-pulse flex-col gap-4">
				{[...Array(10)].map((_, i) => (
					<span
						className="h-1.5 w-20 rounded-md bg-slate-300 dark:bg-slate-800 md:w-36"
						key={i}
					/>
				))}
			</span>
			<span className="flex animate-pulse flex-col gap-4">
				{[...Array(10)].map((_, i) => (
					<span
						className="h-1.5 w-20 rounded-md bg-slate-300 dark:bg-slate-800 md:w-36"
						key={i}
					/>
				))}
			</span>
			<span className="hidden h-10 w-10 animate-pulse rounded-full bg-slate-300 dark:bg-slate-800 md:flex" />
		</div>
	);
}
