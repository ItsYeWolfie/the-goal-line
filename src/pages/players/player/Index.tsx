import { Suspense, useEffect, useContext } from 'react';
import { Await, useLoaderData, useParams } from 'react-router-dom';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import HeaderTabs from '../../../components/tabs/HeaderTabs';
import { GlobalHeaderContext } from '../../../contexts/GlobalHeader.context';
import playerTabs from '../../../lib/tabs/player-tabs';
import { IPlayerWithStatistics } from '../../../types/Player.types';
import PlayerMain from './Main';

export default function PlayerIndex() {
	const { playerID } = useParams<{ playerID: string }>();
	const { playerData } = useLoaderData() as { playerData: IPlayerWithStatistics };
	const { setTabsComponent } = useContext(GlobalHeaderContext);

	useEffect(() => {
		setTabsComponent(
			<HeaderTabs
				dir="players"
				params={`${playerID}`}
				tabs={playerTabs}
			/>,
		);

		return () => setTabsComponent(null);
	}, [playerID, setTabsComponent]);

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={playerData}>{(_playerData) => <PlayerMain playerData={_playerData} />}</Await>
		</Suspense>
	);
}
