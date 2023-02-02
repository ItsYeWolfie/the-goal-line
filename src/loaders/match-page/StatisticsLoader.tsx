export default function StatisticsLoader() {
	return (
		<div className="mx-auto flex h-auto w-full flex-col items-center justify-around gap-3 rounded-md border border-slate-700 bg-gray-800 p-2 py-10 shadow md:w-4/5 lg:w-full">
			{[...Array(16)].map((_, i) => (
				<span
					className="flex animate-pulse flex-col items-center justify-center gap-3"
					key={i}
				>
					<span className="flex w-[130%] justify-evenly md:w-[170%]">
						<span className="h-1.5 w-4 rounded-md bg-slate-700" />
						<span className="h-1.5 w-36 rounded-md bg-slate-700" />
						<span className="h-1.5 w-4 rounded-md bg-slate-700" />
					</span>
					<span className="flex gap-3">
						<span className="h-1.5 w-44 rounded-md bg-slate-700 md:w-72" />
						<span className="h-1.5 w-44 rounded-md bg-slate-700 md:w-72" />
					</span>
				</span>
			))}
		</div>
	);
}
