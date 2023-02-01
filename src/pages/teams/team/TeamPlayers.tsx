import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import TeamPlayersSection from '../../../components/tabs/team/players/Index';

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
