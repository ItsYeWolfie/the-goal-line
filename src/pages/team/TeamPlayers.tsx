import { Await, useLoaderData } from 'react-router-dom';
import { useState, Suspense, useEffect, useMemo, useCallback } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import { ILeagueWithSeason } from '../../../types/League.types';
import TeamPlayersTable from '../../components/tabs/team/players/TeamPlayersTable';
import { filterSelfDuplicates, getPlayersByPosition } from '../../../lib/helpers/ArrayMethods';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';

function TeamPlayersSection({ playersData }: { playersData: IPlayerWithStatistics[] }) {
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
	}, [leagues]);
	return (
		<>
			<div className="sticky top-0 z-10 mb-8 bg-neutral-800 p-4">
				<label htmlFor="league">
					<span className="mb-1 block text-sm font-medium text-neutral-100">League</span>
					<select
						className="bg-neutral-800"
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

export default function TeamPlayers() {
	const { players } = useLoaderData() as { players: IPlayerWithStatistics[] };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={players}>
				{(playersData: IPlayerWithStatistics[]) => {
					return TeamPlayersSection({ playersData });
				}}
			</Await>
		</Suspense>
	);
}
