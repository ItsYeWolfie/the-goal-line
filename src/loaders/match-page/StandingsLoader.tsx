export default function StandingsLoader() {
	return (
		<div className="mx-auto flex h-auto w-full flex-col gap-3 rounded-md border border-slate-700 bg-gray-800 p-2 shadow md:w-4/5 lg:w-full">
			{[...Array(20)].map((_, i) => (
				<div
					className="flex w-full items-center justify-between border-[0.2px] border-gray-300 border-opacity-30 p-2"
					key={i}
				>
					<span className="flex h-1.5 w-48 gap-2">
						<span className="h-full w-8 bg-slate-700" />
						<span className="ml-2 h-full w-4/5 bg-slate-700" />
					</span>
					<span className="flex h-1.5 w-14 gap-2">
						<span className="h-full w-1/3 bg-slate-700" />
						<span className="h-full w-1/3 bg-slate-700" />
						<span className="h-full w-1/3 bg-slate-700" />
					</span>
				</div>
			))}
			{[...Array(3)].map((_, i) => (
				<span
					className="flex items-center justify-start"
					key={i}
				>
					<span className="h-3 w-3 rounded-full bg-slate-700" />
					<span className="ml-2 h-1.5 w-16 rounded-md bg-slate-700" />
				</span>
			))}
		</div>
	);
}
