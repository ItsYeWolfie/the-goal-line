import { useCallback, useEffect, useMemo, useState } from 'react';
import { filterSelfDuplicates, getPlayersByPosition } from '../../../../lib/helpers/ArrayMethods';
import { ILeagueWithSeason } from '../../../../types/League.types';
import { IPlayerWithStatistics } from '../../../../types/Player.types';
import TeamPlayersTable from './Table';

export default function TeamPlayersSection({ playersData }: { playersData: IPlayerWithStatistics[] }) {
	const [activeLeagueId, setActiveLeagueId] = useState(0);
	const leagues = useMemo(() => {
		const leaguesArray = [] as ILeagueWithSeason[];
		playersData.map((player) => player.statistics.forEach((stat) => leaguesArray.push(stat.league)));
		return filterSelfDuplicates(leaguesArray, 'id');
	}, [playersData]);
	const goalkeepers = useMemo(() => getPlayersByPosition(playersData, 'Goalkeeper'), [playersData]);
	const defenders = useMemo(() => getPlayersByPosition(playersData, 'Defender'), [playersData]);
	const midfielders = useMemo(() => getPlayersByPosition(playersData, 'Midfielder'), [playersData]);
	const forwards = useMemo(() => getPlayersByPosition(playersData, 'Attacker'), [playersData]);

	const handleLeagueChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		const target = e.target as HTMLSelectElement;
		setActiveLeagueId(Number(target.value));
	}, []);

	useEffect(() => {
		setActiveLeagueId(leagues[0].id);

		return () => {
			setActiveLeagueId(0);
		};
	}, [leagues]);
	return (
		<>
			<div className="sticky top-0 z-10 mb-4">
				<label htmlFor="league">
					<span className="mb-1 block text-sm font-medium text-gray-900 dark:text-gray-100">League</span>
					<select
						className="block rounded-md border-gray-200 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 sm:text-sm"
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
}
