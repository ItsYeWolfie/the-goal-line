import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import TeamPlayersSection from '../../../components/tabs/team/players/Index';
import TeamPlayersLoader from './loaders/Players';

export default function TeamPlayers() {
	const { players } = useLoaderData() as { players: IPlayerWithStatistics[] };

	return (
		<Suspense fallback={<TeamPlayersLoader />}>
			<Await resolve={players}>{(playersData: IPlayerWithStatistics[]) => TeamPlayersSection({ playersData })}</Await>
		</Suspense>
	);
}
