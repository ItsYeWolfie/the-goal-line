import { Await, useLoaderData } from 'react-router-dom';
import { useState, Suspense } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import { ILeagueWithSeason } from '../../../types/League.types';
import TeamPlayersTable from '../../components/tabs/team/players/TeamPlayersTable';
import {
	filterSelfDuplicates,
	getPlayersByPosition,
} from '../../../lib/helpers/ArrayMethods';

export default function TeamPlayers() {
	const { players } = useLoaderData() as { players: IPlayerWithStatistics[] };
	let leagues: ILeagueWithSeason[] = [];
	const [activeLeagueId, setActiveLeagueId] = useState(0);

	const handleLeagueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const target = e.target as HTMLSelectElement;
		setActiveLeagueId(Number(target.value));
	};

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Await resolve={players}>
				{(playersData: IPlayerWithStatistics[]) => {
					playersData.map((player) =>
						player.statistics.forEach((stat) => leagues.push(stat.league)),
					);
					const goalkeepers = getPlayersByPosition(playersData, 'Goalkeeper');
					const defenders = getPlayersByPosition(playersData, 'Defender');
					const midfielders = getPlayersByPosition(playersData, 'Midfielder');
					const forwards = getPlayersByPosition(playersData, 'Attacker');
					leagues = filterSelfDuplicates(leagues, 'id');
					return (
						<>
							<div className="sticky top-0 z-10 mb-8 bg-gray-800 p-4">
								<label htmlFor="league">
									<span className="mb-1 block text-sm font-medium text-gray-100">
										League
									</span>
									<select
										className="bg-gray-800"
										name="league"
										onChange={handleLeagueChange}
									>
										{leagues.map((league) => (
											<option
												key={league.id}
												value={league.id}
											>
												{league.name}
											</option>
										))}
									</select>
								</label>
							</div>
							<section className="flex flex-col gap-4 md:flex-row">
								<aside className="flex basis-1/2 flex-col gap-4">
									<TeamPlayersTable
										players={goalkeepers}
										activeLeagueId={activeLeagueId}
										title="Goalkeepers"
									/>
									<TeamPlayersTable
										players={defenders}
										activeLeagueId={activeLeagueId}
										title="Defenders"
									/>
								</aside>
								<aside className="flex basis-1/2 flex-col gap-4">
									<TeamPlayersTable
										players={midfielders}
										activeLeagueId={activeLeagueId}
										title="Midfielders"
									/>
									<TeamPlayersTable
										players={forwards}
										activeLeagueId={activeLeagueId}
										title="Forwards"
									/>
								</aside>
							</section>
						</>
					);
				}}
			</Await>
		</Suspense>
	);
}
