import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import PlayerMain from './Main';

export default function PlayerIndex() {
	const { playerData } = useLoaderData() as { playerData: IPlayerWithStatistics };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={playerData}>{(_playerData) => <PlayerMain playerData={_playerData} />}</Await>
		</Suspense>
	);
}
