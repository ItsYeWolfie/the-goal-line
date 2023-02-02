export default function InjuriesLoader() {
	return (
		<div className="flex h-auto w-full justify-center rounded-md bg-gray-800 p-2 text-xs md:mx-auto md:w-4/5 md:text-lg lg:w-full">
			<table className="w-[45rem]">
				<thead>
					<tr className="flex items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2">
						<span className="-ml-5 flex h-1.5 w-20 justify-center bg-slate-700" />
						<span className="-ml-12 flex h-1.5 w-20 justify-center bg-slate-700" />
						<span className="-ml-5 flex h-1.5 w-20 justify-center bg-slate-700" />
					</tr>
				</thead>
				<tbody>
					<tr className="flex items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2">
						<span className="h-5 w-5 justify-center rounded-full bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
					</tr>
					<tr className="flex items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2">
						<span className="h-5 w-5 justify-center rounded-full bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
					</tr>
					<tr className="flex items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2">
						<span className="h-5 w-5  justify-center rounded-full bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
						<span className="flex h-1.5 w-20 justify-center bg-slate-700" />
					</tr>
				</tbody>
			</table>
		</div>
	);
}
