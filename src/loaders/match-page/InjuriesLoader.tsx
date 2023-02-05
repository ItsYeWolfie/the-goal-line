export default function InjuriesLoader() {
	return (
		<div className="flex h-auto w-full justify-center rounded-md border-slate-300 bg-gray-200 p-2 text-xs dark:border-slate-700 dark:bg-gray-700 md:mx-auto">
			<table className="w-[47rem]">
				<tbody>
					{[...Array(6)].map((_, i) => (
						<tr
							className="flex items-center justify-around border-[0.2px] border-gray-800 border-opacity-30 p-1 dark:border-gray-300"
							key={i}
						>
							<span className="h-5 w-5 animate-pulse justify-center rounded-full bg-slate-300 dark:bg-slate-800" />
							<span className="flex h-1.5 w-20 animate-pulse justify-center rounded-md bg-slate-300 dark:bg-slate-800" />
							<span className="flex h-1.5 w-20 animate-pulse justify-center rounded-md bg-slate-300 dark:bg-slate-800" />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
