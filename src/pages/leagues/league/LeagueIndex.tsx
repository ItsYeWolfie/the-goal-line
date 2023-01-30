import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import MainLeagueSectionLoader from '../../../components/tabs/leagues/league/loaders/LeagueMainSectionLoader';
import { ILeagueData } from '../../../types/League.types';
import LeagueMain from './LeagueMain';

export default function LeagueIndex() {
	const { league: leagueData } = useLoaderData() as { league: ILeagueData };

	return (
		<Suspense fallback={<MainLeagueSectionLoader />}>
			<Await resolve={leagueData}>{(league: ILeagueData) => <LeagueMain league={league} />}</Await>
		</Suspense>
	);
}
