export default function MatchesLoader() {
	return (
		<div className="mt-14">
			{[...Array(20)].map((_, i) => (
				<div
					className="mt-2 flex h-12 w-full animate-pulse gap-2 rounded-md bg-gray-300 p-2 dark:bg-gray-700"
					key={i}
				>
					<span className="z-20 my-auto flex h-1.5 w-10 rounded-md bg-slate-400 dark:bg-slate-600" />
					<span className="my-auto ml-4 flex flex-col gap-3">
						<span className="z-20 h-2 w-40 rounded-md bg-slate-400 dark:bg-slate-600" />
						<span className="z-20 h-2 w-40 rounded-md bg-slate-400 dark:bg-slate-600" />
					</span>
					<span className="my-auto ml-auto flex flex-col gap-2">
						<span className="z-20 flex h-1.5 w-6 rounded-md bg-slate-400 dark:bg-slate-600" />
						<span className="z-20 flex h-1.5 w-6 rounded-md bg-slate-400 dark:bg-slate-600" />
					</span>
				</div>
			))}
		</div>
	);
}
