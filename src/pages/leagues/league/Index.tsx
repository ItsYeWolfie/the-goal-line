import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router';
import MainLoadingSpinner from '../../../components/MainLoadingSpinner';
import { ILeagueData } from '../../../types/League.types';
import LeagueMain from './Main';

export default function LeagueIndex() {
	const { league: leagueData } = useLoaderData() as { league: ILeagueData };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={leagueData}>{(league: ILeagueData) => <LeagueMain league={league} />}</Await>
		</Suspense>
	);
}
