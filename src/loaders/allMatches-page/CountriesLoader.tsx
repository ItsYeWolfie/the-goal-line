export default function CountriesLoader() {
	return (
		<div>
			<span className="flex h-12 items-center">
				<span className="h-5 w-7 bg-slate-300 dark:bg-slate-700" />
				<span className="ml-4 h-2 w-14 bg-slate-300 dark:bg-slate-700" />
			</span>
			{[...Array(20)].map((_, i) => (
				<span
					className="mb-4 flex animate-pulse items-center"
					key={i}
				>
					<span className="mr-2 h-5 w-12 rounded-md bg-slate-300 dark:bg-slate-700" />
					<span className="h-1.5 w-36 rounded-md bg-slate-300 dark:bg-slate-700" />
				</span>
			))}
		</div>
	);
}
