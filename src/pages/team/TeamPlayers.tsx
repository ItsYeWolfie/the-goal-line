import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import { ILeagueWithSeason } from '../../../types/League.types';
import TeamPlayersTable from '../../components/tabs/team/players/TeamPlayersTable';

export default function TeamPlayers() {
	const players = useLoaderData() as IPlayerWithStatistics[];
	let leagues: ILeagueWithSeason[] = [];
	const [activeLeagueId, setActiveLeagueId] = useState(0);
	const goalkeepers = players.filter(
		(player) => player.statistics[0].games.position === 'Goalkeeper',
	);

	const defenders = players.filter(
		(player) => player.statistics[0].games.position === 'Defender',
	);

	const midfielders = players.filter(
		(player) => player.statistics[0].games.position === 'Midfielder',
	);

	const forwards = players.filter(
		(player) => player.statistics[0].games.position === 'Attacker',
	);

	players.map((player) =>
		player.statistics.forEach((stat) => leagues.push(stat.league)),
	);

	leagues = leagues.filter(
		(league, index, self) =>
			index === self.findIndex((l) => l.id === league.id),
	);

	const handleLeagueChange = (e: Event) => {
		const target = e.target as HTMLSelectElement;
		setActiveLeagueId(parseInt(target.value, 10));
	};
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
						onChange={() => handleLeagueChange}>
						{leagues.map((league) => (
							<option
								key={league.id}
								value={league.id}>
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
}
