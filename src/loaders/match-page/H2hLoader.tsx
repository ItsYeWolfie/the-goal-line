export default function H2hLoader() {
	return (
		<table className="mx-auto flex h-auto w-full flex-col items-center justify-around gap-3 rounded-md border border-slate-700 bg-gray-800 p-2 shadow md:w-4/5 lg:w-96">
			<tbody className="table-row-group lg:mx-auto">
				{[...Array(6)].map((_, i) => (
					<tr
						className="flex w-[23rem] animate-pulse items-center justify-around border-[0.2px] border-gray-300 border-opacity-30 p-2"
						key={i}
					>
						<td className="flex h-1.5 w-24 rounded-md bg-slate-700" />
						<td className="flex h-1.5 w-14 rounded-md bg-slate-700" />
						<td className="flex h-1.5 w-24 rounded-md bg-slate-700" />
					</tr>
				))}
			</tbody>
		</table>
	);
}
