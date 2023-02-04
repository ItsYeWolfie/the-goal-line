export default function OddsLoader() {
	return (
		<div className="mx-auto flex h-auto w-full justify-around rounded-md border border-slate-300 bg-gray-200 p-4 shadow dark:border-slate-700 dark:bg-gray-800 md:w-4/5 lg:w-full">
			{[...Array(3)].map((_, i) => (
				<span
					className="flex h-8 w-24 animate-pulse items-center justify-around gap-2 rounded-md bg-slate-300 p-2 dark:bg-slate-700"
					key={i}
				>
					<span className="h-4 w-6 bg-slate-400 dark:bg-slate-600" />
					<span className="h-4 w-6 bg-slate-400 dark:bg-slate-600" />
					<span className="h-4 w-6 bg-slate-400 dark:bg-slate-600" />
				</span>
			))}
		</div>
	);
}
