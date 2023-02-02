export default function CountriesLoader() {
	return (
		<div>
			{[...Array(20)].map((_, i) => (
				<span
					className="mb-4 flex animate-pulse items-center"
					key={i}
				>
					<span className="mr-2 h-5 w-12 rounded-md bg-slate-700" />
					<span className="h-1.5 w-36 rounded-md bg-slate-700" />
				</span>
			))}
		</div>
	);
}
