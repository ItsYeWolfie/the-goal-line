import { ILeagueData } from '../../../../../types/League.types';

export default function LeaguOverviewHeader({ league }: { league: ILeagueData }) {
	return (
		<header className="flex flex-col gap-4">
			<div className="flex items-center">
				<img
					src={league.country.flag}
					alt={league.country.name}
					className="mr-2 h-6 w-6 rounded-full object-cover"
				/>
				<h3 className="text-sm font-medium uppercase">{league.country.name}</h3>
			</div>
			<div className="flex gap-1">
				<img
					src={league.league.logo}
					alt={league.league.name}
					className="mr-2 h-12 w-12 rounded-md bg-white object-cover"
				/>

				<div className="flex flex-col items-start justify-evenly">
					<h3 className="font-bold">{league.league.name}</h3>
					<select className="border-none bg-transparent text-xs font-bold">
						{league.seasons
							.sort((a, b) => b.year - a.year)
							.map((season) => (
								<option
									key={season.year}
									value={season.year}
									className="bg-gray-200 text-sm font-medium dark:bg-gray-700 dark:text-white"
								>
									{season.year} / {season.year + 1}
								</option>
							))}
					</select>
				</div>
			</div>
		</header>
	);
}
