import { Link } from 'react-router-dom';
import { ILeagueWithSeason } from '../../../../types/League.types';

export default function TeamFixturesLeagueCard({
	leagues,
	selectedLeague,
}: {
	leagues: ILeagueWithSeason[];
	selectedLeague: number;
}) {
	return (
		<div className="bg-gray-200 p-4 text-gray-900 dark:bg-gray-800 dark:text-white md:rounded-md md:text-center">
			{leagues
				.filter((league) => {
					return league.id === selectedLeague;
				})
				.map((league) => (
					<Link
						to={`/leagues/${league.id}/`}
						className="flex items-center md:justify-center"
						key={league.id}
					>
						<img
							className="mr-2 h-6 w-6"
							src={league.logo}
							alt={`${league.name} logo`}
						/>
						<span className="flex items-center gap-1 text-lg font-bold">
							<span>{league.name}</span>
							{league.flag && (
								<img
									className="mr-2 h-4 w-4"
									src={league.flag}
									alt={`${league.name} flag`}
								/>
							)}
							<span>-</span>
							<span>{league.season}</span>
						</span>
					</Link>
				))}
		</div>
	);
}
