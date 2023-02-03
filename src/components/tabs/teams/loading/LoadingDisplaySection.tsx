export default function LoadingTeamDisplaySection() {
	return (
		<>
			{[...Array(10).keys()].map((team) => (
				<div
					key={team}
					className="col-span-12 flex h-32 animate-pulse items-center justify-center bg-gray-300 bg-cover bg-center bg-no-repeat dark:bg-gray-700 sm:col-span-6"
				>
					<div className="flex basis-1/2 items-center justify-center rounded-md bg-black bg-opacity-70">
						<header className="h-10 basis-3/4 animate-pulse rounded-md" />
					</div>
				</div>
			))}
		</>
	);
}
