export default function FormationLoader() {
	return (
		<div className="mx-auto flex h-auto w-full items-center justify-around rounded-md border border-slate-300 bg-gray-200 p-2 shadow dark:border-slate-700 dark:bg-gray-700">
			<span className="my-auto flex animate-pulse flex-col items-center">
				<span className="h-12 w-12 rounded-full bg-slate-300 dark:bg-slate-800" />
				<span className="mt-2 h-1.5 w-10 rounded-md bg-slate-300 dark:bg-slate-800" />
			</span>
			<span className="h-32 w-60 animate-pulse rounded-md bg-slate-300 dark:bg-slate-800 md:w-80" />
			<span className="my-auto flex animate-pulse flex-col items-center">
				<span className="h-12 w-12 rounded-full bg-slate-300 dark:bg-slate-800" />
				<span className="mt-2 h-1.5 w-10 rounded-md bg-slate-300 dark:bg-slate-800" />
			</span>
		</div>
	);
}
