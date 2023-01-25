import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { ITeamAndVenue } from '../../types/Team.types';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';
import TeamsMain from '../../components/tabs/teams/TeamsMain';

export default function TeamsIndexPage() {
	const { teams } = useLoaderData() as { teams: ITeamAndVenue[] };

	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={teams}>{(_teams) => <TeamsMain teams={_teams} />}</Await>
		</Suspense>
	);
}
