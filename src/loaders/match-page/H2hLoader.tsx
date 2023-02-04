export default function H2hLoader() {
	return (
		<table className="mx-auto flex h-auto w-full flex-col items-center justify-around gap-3 rounded-md border border-slate-300 bg-gray-200 p-2 shadow dark:border-slate-700 dark:bg-gray-700">
			<tbody className="table-row-group lg:mx-auto">
				{[...Array(6)].map((_, i) => (
					<tr
						className="flex w-[23rem] animate-pulse items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2"
						key={i}
					>
						<td className="flex h-1.5 w-24 rounded-md bg-slate-300 dark:bg-slate-800" />
						<td className="flex h-1.5 w-14 rounded-md bg-slate-300 dark:bg-slate-800" />
						<td className="flex h-1.5 w-24 rounded-md bg-slate-300 dark:bg-slate-800" />
					</tr>
				))}
			</tbody>
		</table>
	);
}
