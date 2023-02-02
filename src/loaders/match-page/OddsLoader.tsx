export default function OddsLoader() {
	return (
		<div className="mx-auto flex h-auto w-full justify-around rounded-md border border-slate-700 bg-gray-800 p-4 shadow md:w-4/5 lg:w-full">
			{[...Array(3)].map((_, i) => (
				<span
					className="flex h-8 w-24 animate-pulse items-center justify-around gap-2 rounded-md bg-slate-700 p-2"
					key={i}
				>
					<span className="h-4 w-6 bg-gray-800" />
					<span className="h-4 w-6 bg-gray-800" />
					<span className="h-4 w-6 bg-gray-800" />
				</span>
			))}
		</div>
	);
}
