import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import PlayerMainLoading from './loaders/Main';
import PlayerMain from './Main';

export default function PlayerIndex() {
	const { playerData } = useLoaderData() as { playerData: IPlayerWithStatistics };

	return (
		<Suspense fallback={<PlayerMainLoading />}>
			<Await resolve={playerData}>{(_playerData) => <PlayerMain playerData={_playerData} />}</Await>
		</Suspense>
	);
}
