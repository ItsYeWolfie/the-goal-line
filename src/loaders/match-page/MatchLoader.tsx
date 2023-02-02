export default function MatchLoader() {
	return (
		<div className="mx-auto flex h-auto w-full justify-around rounded-md border border-slate-700 bg-gray-800 p-4 shadow md:w-4/5 lg:w-full">
			<div className="flex animate-pulse flex-col justify-center">
				<span className="flex items-center justify-start">
					<span className="h-10 w-10 rounded-full bg-slate-700" />
					<span className="ml-3 h-2 w-32 rounded-md bg-slate-700" />
				</span>
				<span className="ml-14 flex animate-pulse flex-col">
					<span className="h-1.5 w-28 rounded-md bg-slate-700" />
					<span className="mt-3 h-1.5 w-28 rounded-md bg-slate-700" />
					<span className="mt-3 h-1.5 w-28 rounded-md bg-slate-700" />
				</span>
			</div>
			<div className="mt-6 flex animate-pulse flex-col items-center">
				<span className="h-2 w-24 rounded-md bg-slate-700" />
				<span className="mt-3 h-2 w-16 rounded-md bg-slate-700" />
				<span className="mt-16 flex h-1.5 w-20 justify-center bg-slate-700 " />
			</div>
			<div className="flex animate-pulse flex-col justify-center">
				<span className="flex items-center">
					<span className="h-10 w-10 rounded-full bg-slate-700" />
					<span className="ml-3 h-2 w-32 rounded-md bg-slate-700" />
				</span>
				<span className="ml-14 flex animate-pulse flex-col">
					<span className="h-1.5 w-28 rounded-md bg-slate-700" />
					<span className="mt-3 h-1.5 w-28 rounded-md bg-slate-700" />
					<span className="mt-3 h-1.5 w-28 rounded-md bg-slate-700" />
				</span>
			</div>
		</div>
	);
}
