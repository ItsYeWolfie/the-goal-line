import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import MainLoadingSpinner from '../../components/MainLoadingSpinner';
import { ITeamAndVenue } from '../../types/Team.types';
import TeamMainPage from './TeamMain';

export default function TeamIndex() {
	const { teamAndVenue } = useLoaderData() as { teamAndVenue: ITeamAndVenue };
	return (
		<Suspense fallback={<MainLoadingSpinner />}>
			<Await resolve={teamAndVenue}>
				{(teamAndVenueData: ITeamAndVenue) => (
					<TeamMainPage
						team={teamAndVenueData.team}
						venue={teamAndVenueData.venue}
					/>
				)}
			</Await>
		</Suspense>
	);
}
